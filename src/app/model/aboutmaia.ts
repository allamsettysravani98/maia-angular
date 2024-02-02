export class AboutMaia {
  action: string | undefined;
  page_id: number | undefined;
  page_content: string | undefined;
  page_content_nl: string | undefined;
  page_content_fr: string | undefined;
  page_content_de: string | undefined;
  lan: string | undefined;
}

export class Session {
  action!: string;
  id!: number;
  heading!: string;
  description!: string;
  image!: string;
}



export class landingSession {
  action!: string;
  id!: number;
  heading!: string;
  description!: string;
  heading2!: string;
}
