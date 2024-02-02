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
  image!: string;
  heading!: string;
  heading_nl!: string;
  heading_fr!: string;
  heading_de!: string;
  description!: string;
  description_nl!: string;
  description_fr!: string;
  description_de!: string;
  lan: string | undefined;
}

export class landingSession {
  action!: string;
  id!: number;
  heading!: string;
  heading_nl!: string;
  heading_fr!: string;
  heading_de!: string;
  description!: string;
  description_nl!: string;
  description_fr!: string;
  description_de!: string;
  heading2!: string;
  heading2_fr!: string;
  heading2_nl!: string;
  heading2_de!: string;
  lan!: string;
}
