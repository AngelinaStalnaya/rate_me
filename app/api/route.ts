import { sql } from "@vercel/postgres";


export async function CompanyData({companyId}: {companyId:string}) {
    const companyData = await sql`SELECT * FROM companies WHERE company_id = ${companyId};`;
    return companyData;
}
