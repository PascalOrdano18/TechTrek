export type ArticleCategory = 'Evento' | 'Tecnología' | 'Startup';

export interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  category: ArticleCategory;
  date: string;
  imageUrl: string;
  author: string;
} 