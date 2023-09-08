export interface NavLinks {
  id: string;
  title: string;
}
export interface Features {
  id: string;
  icon: string;
  title: string;
  content: string;
}
export interface Feedback {
  id: string;
  content: string;
  name: string;
  title: string;
  img: string;
}
export interface Stats {
  id: string;
  title: string;
  value: string;
}
export interface link {
  name: string;
  link: string;
}
export interface FooterLinks {
  title: string;
  links: link[];
}

export interface SocialMedia {
  id: string;
  icon: string;
  link: string;
}

export interface Clients {
  id: string;
  logo: string;
}
