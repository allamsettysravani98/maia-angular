export class Changepwresponse {
  action: string | undefined;
  user_id: Number | undefined;
  type: string | undefined;
  status: string | undefined;
  message: string | undefined;
  current_password: string | undefined;
  new_password: string | undefined;
  confirm_new_password: string | undefined;
}

export class Forgotpwresponse {
  action: string | undefined;
  email: string | undefined;
}
