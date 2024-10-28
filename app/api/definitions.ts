export type CompanyType = {
    company_id: string;
    company_name: string;
    address: string;
}

export type RankType = {
    rank: number;
    comment?: string;
    company_id: string;
    date: string;
}