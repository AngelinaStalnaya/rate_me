import { sql } from "@vercel/postgres";
import { CompanyType, RankType } from "./definitions";

export async function fetchCompanyDataById(id: string) {
  try {
    const data = await sql<CompanyType>`
    SELECT * 
    FROM companies
    WHERE companies.company_id = ${id};`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Company`s data.");
  }
}

export async function fetchCompaniesDataByName(companyName: string) {
    try {
      const data = await sql<CompanyType>`
      SELECT * 
      FROM companies
      WHERE companies.company_name ILIKE ${`%${companyName}%`} 
      ORDER BY companies.company_name ASC;`;

      return data.rows;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch Company`s data.");
    }
  }

export async function fetchLatestRanks(id: string) {
  try {
    const data = await sql<RankType>`
        SELECT *
        FROM ranks
        WHERE ranks.company_id = ${id}
        ORDER BY ranks.date DESC
        LIMIT 5;`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest ranks.");
  }
}

export async function fetchLatestRanksWithComments(id: string) {
  try {
    const data = await sql<RankType>`
          SELECT *
          FROM ranks
          WHERE ranks.company_id = ${id} AND ranks.comment is NOT NULL
          ORDER BY ranks.date DESC
          LIMIT 5;`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest ranks.");
  }
}

export async function fetchAllRanks(id: string) {
  try {
    const data = await sql<RankType>`
          SELECT *
          FROM ranks
          WHERE ranks.company_id = ${id}
          ORDER BY ranks.date DESC;`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the all ranks.");
  }
}

export async function fetchLimitedRanks(
  id: string,
  startDate: string,
  endDate: string
) {
  try {
    const data = await sql<RankType>`
          SELECT *
          FROM ranks
          WHERE ranks.company_id = ${id} AND ranks.date >= ${startDate} and ranks.date <= ${endDate}
          ORDER BY ranks.date DESC;`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the date limited ranks.");
  }
}

// export async function fetchFilteredCustomers(query: string) {
//     try {
//       const data = await sql<CustomersTableType>`
//           SELECT
//             customers.id,
//             customers.name,
//             customers.email,
//             customers.image_url,
//             COUNT(invoices.id) AS total_invoices,
//             SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
//             SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
//           FROM customers
//           LEFT JOIN invoices ON customers.id = invoices.customer_id
//           WHERE
//             customers.name ILIKE ${`%${query}%`} OR
//           customers.email ILIKE ${`%${query}%`}
//           GROUP BY customers.id, customers.name, customers.email, customers.image_url
//           ORDER BY customers.name ASC
//         `;

//       const customers = data.rows.map((customer) => ({
//         ...customer,
//         total_pending: formatCurrency(customer.total_pending),
//         total_paid: formatCurrency(customer.total_paid),
//       }));

//       return customers;
//     } catch (err) {
//       console.error('Database Error:', err);
//       throw new Error('Failed to fetch customer table.');
//     }
//   }
