import { userOptions } from "../interfaces";
import { Transaction, VersionedTransaction } from "@solana/web3.js";
import { WALLET } from "../constants";
import { EventEmitter } from "sweet-event-emitter";
import { store } from "../store";

export class userConstructor {
  public id!: string | undefined;
  public createdAt!: string | undefined;
  public updatedAt!: string | undefined;
  public email!: string | undefined;
  public address!: string | undefined;
  public avatar!: string | undefined;
  public event: EventEmitter 
  private state: any;

  constructor(options?: userOptions) {
    this.id = options?.id;
    this.createdAt = options?.createdAt;
    this.updatedAt = options?.updatedAt;
    this.email = options?.email;
    this.address = options?.address;
    this.avatar = options?.address;
    this.event = new EventEmitter();
  }

  public sendTransaction(
    transaction: Transaction | VersionedTransaction,
    isgassless: boolean,
    options?: {}
  ) {
    try {
      const url = new URL(`${WALLET}/send-transaction`);
      url.searchParams.append("txn", transaction.serialize().toString());
      url.searchParams.append(
        "options",
        options?.toString() || String({ data: "empty" })
      );
      url.searchParams.append("isgasless", String(isgassless));
      
    } catch {
      throw new Error("Can't execute send transaction");
    }
  }

  public signTransaction(transaction: Transaction | VersionedTransaction) {
    try {
      const url = new URL(`${WALLET}/sign-transaction`);
      url.searchParams.append("txn", transaction.serialize().toString());
      
    } catch {
      throw new Error("Can't execute send transaction");
    }
  }

  public signAllTransactions(
    transactions: Transaction[] | VersionedTransaction[]
  ) {
    try {
      const url = new URL(`${WALLET}/sign-all-transactions`);
      url.searchParams.append(
        "txns",
        transactions.map((tx) => tx.serialize().toString()).toString()
      );

      
    } catch {
      throw new Error("Can't execute signing of all transactions");
    }
  }

  public signMessage(message: string, isgasless: boolean, options?: {}) {
    try {
      const url = new URL(`${WALLET}/sign-message`);
      url.searchParams.append("msg", message);
      url.searchParams.append("address", this.address || "NOT-FOUND");
      url.searchParams.append("isgasless", String(isgasless));
      
    } catch {
      throw new Error("Can't execute signing of message");
    }
  }
  
  public syncState(state: unknown) {
    this.state = state
  }

  private toggleIframe(src: string, isVisible: boolean) {
    this.state?.setSrc(src);
    this.state.setVisable(isVisible);
  }
}
