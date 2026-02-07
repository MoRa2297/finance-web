import { ApiClient } from "../client";
import { Account, CreateAccountDto, UpdateAccountDto } from "../types";

export class AccountsModule {
  constructor(private client: ApiClient) {}

  getAll() {
    return this.client.get<Account[]>("/accounts");
  }

  getById(id: string) {
    return this.client.get<Account>(`/accounts/${id}`);
  }

  create(data: CreateAccountDto) {
    return this.client.post<Account>("/accounts", data);
  }

  update(id: string, data: UpdateAccountDto) {
    return this.client.patch<Account>(`/accounts/${id}`, data);
  }

  delete(id: string) {
    return this.client.delete<void>(`/accounts/${id}`);
  }
}
