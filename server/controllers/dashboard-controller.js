const sql = require("../config/db");

exports.DashboardData = async (res, req) => {
  const { id } = req.user;
  console.log("token", id);
  try {
    const totalTransType = await sql`SELECT r.transaction_type, SUM(r.amount) 
    FROM records r
     INNER JOIN users u ON r.uid=u.id 
    WHERE u.id='95961d25-71f2-412c-88f6-e43be99c18e2'
    GROUP BY r.transaction_type`;
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

    res.status(200).json({
      message: "successfully read Dashboard data",
      totalTransType,
      dayTrans,
      weekCategoryTrans,
      latestFiveRecords,
    });
  } catch (error) {}
  console.log("error", error);
  res.status(404).json({ message: "Couldn't read Dashboard data" });
};
