export type ProductType = {
  title: string;
  slug: string;
  description: string;
  miniDescription: string;
  discount: number;
  price: number;
  images: string[];
  thumbImage: string;
};

export type UserData = {
  name: string;
  avatar: string;
  email: string;
};
