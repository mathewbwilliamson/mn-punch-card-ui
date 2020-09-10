export interface BasicResource {
  id: number;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
}

export interface AmazonApiAccountData {
  creditsUsed: number;
  creditsRemaining: number;
  creditsLimit: number;
  overageLimit: number;
  overageUsed: number;
}
