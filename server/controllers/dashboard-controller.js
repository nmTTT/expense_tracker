const sql = require("../config/db");

const dashboardData = async (req, res) => {
  console.log("first", req.user);
  const { id } = req.user;
  console.log("token", id);

  try {
    const dayTrans =
      await sql`SELECT  DATE_TRUNC('day', r.created_at) w, r.transaction_type,
    SUM(r.amount)
    FROM records r 
    INNER JOIN users u ON r.uid=u.id 
    WHERE u.id=${id}
    GROUP BY
    w, r.transaction_type
    ORDER BY
    w`;
    const weekCategoryTrans = await sql`SELECT
        DATE_TRUNC('week', r.created_at) AS week,
        cat.name AS cat_name,
        SUM(r.amount) AS total_amount
    FROM
        records r
    INNER JOIN
        users u ON r.uid = u.id
    INNER JOIN
        categories cat ON cat.id = r.cid
    WHERE
        u.id =${id}
        AND r.transaction_type='EXP'
    GROUP BY
        week, cat.name`;
    const latestFiveRecords =
      await sql`    SELECT r.name, r.amount, r.transaction_type
        FROM records r
        INNER JOIN users u ON r.uid=u.id
        WHERE u.id=${id}
          ORDER BY
      r.created_at DESC
        LIMIT
        5`;
    const percentageRecords = await sql`SELECT
    week,
    cat_name,
    total_amount,
    ROUND((total_amount::NUMERIC / weekly_total::NUMERIC) * 100, 2) AS weekly_percentage
FROM (
    SELECT
        DATE_TRUNC('week', r.created_at) AS week,
        cat.name AS cat_name,
        SUM(r.amount) AS total_amount,
        SUM(SUM(r.amount)) OVER (PARTITION BY DATE_TRUNC('week', r.created_at)) AS weekly_total
    FROM
        records r
    INNER JOIN
        users u ON r.uid = u.id
    INNER JOIN
        categories cat ON cat.id = r.cid
    WHERE
        u.id = ${id}
        AND r.transaction_type = 'EXP'
    GROUP BY
        cat.name, DATE_TRUNC('week', r.created_at)
) sub;`;

    res.status(200).json({
      dayTrans,
      weekCategoryTrans,
      latestFiveRecords,
      percentageRecords,
    });
  } catch (error) {
    console.log("error", error);
    res.status(404).json({ message: "Couldn't read Dashboard data" });
  }
};

const totalTransType = async (req, res) => {
  console.log("first", req.user);
  const { id } = req.user;
  console.log("token", id);
  try {
    const totalTransType = await sql`
    SELECT r.transaction_type, SUM(r.amount) 
    FROM records r
     INNER JOIN users u ON r.uid=u.id 
    WHERE u.id='95961d25-71f2-412c-88f6-e43be99c18e2' AND r.transaction_type = 'EXP'
    GROUP BY r.transaction_type`;
    res.status(200).json({});
  } catch (error) {
    console.log("error", error);
    res.status(404).json({ message: "Couldn't read Dashboard data" });
  }
};

module.exports = { dashboardData };
