import { ApiClient, ApiClientConfig } from "./client";
import { AccountsModule } from "./modules/accounts";

export class FinanceApi {
  public accounts: AccountsModule;

  constructor(config: ApiClientConfig) {
    const client = new ApiClient(config);
    this.accounts = new AccountsModule(client);
  }
}
