export type CompanyType = {
    id: string;
    company_id: string;
    company_name: string;
    address: string;
}

export type RankType = {
    id: string;
    rank: number;
    comment?: string;
    company_id: string;
    date: string;
}