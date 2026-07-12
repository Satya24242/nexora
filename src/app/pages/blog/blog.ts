import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Article {
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  icon: string;
}

@Component({
  selector: 'app-blog',
  imports: [MatIconModule, MatChipsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  protected readonly featured: Article = {
    category: 'Cybersecurity',
    title: '5 Warning Signs Your Business Is Overdue for a Security Audit',
    summary:
      'Most breaches we investigate were preventable. Here are the red flags we look for during a first-pass security assessment — and what to do about each one.',
    date: 'June 18, 2026',
    readTime: '7 min read',
    icon: 'security',
  };

  protected readonly articles: Article[] = [
    {
      category: 'Cloud',
      title: 'Cloud Cost Creep: Where Your AWS Bill Is Actually Going',
      summary: 'A practical breakdown of the line items that quietly inflate cloud spend — and how to trim them without cutting capacity.',
      date: 'June 2, 2026',
      readTime: '6 min read',
      icon: 'cloud',
    },
    {
      category: 'Managed IT',
      title: 'In-House IT vs. Managed Services: A Real Cost Comparison',
      summary: 'We walk through the fully-loaded cost of a single IT hire versus a managed services contract for teams under 100 people.',
      date: 'May 21, 2026',
      readTime: '8 min read',
      icon: 'support_agent',
    },
    {
      category: 'Strategy',
      title: 'Building a Technology Roadmap Your Leadership Team Will Actually Use',
      summary: 'Most IT roadmaps get shelved after one quarter. Here is the format that keeps ours in active use.',
      date: 'May 9, 2026',
      readTime: '5 min read',
      icon: 'insights',
    },
    {
      category: 'Cybersecurity',
      title: 'What SOC 2 Actually Requires From Your IT Environment',
      summary: 'A plain-language walkthrough of the technical controls auditors check for, mapped to what your team needs to implement.',
      date: 'April 27, 2026',
      readTime: '9 min read',
      icon: 'verified_user',
    },
    {
      category: 'Software',
      title: 'When to Build Custom Software vs. Buy an Off-the-Shelf Tool',
      summary: 'A framework we use with clients to decide when a SaaS tool is good enough — and when it will cost more than custom development.',
      date: 'April 12, 2026',
      readTime: '6 min read',
      icon: 'code',
    },
    {
      category: 'Networking',
      title: 'Planning a Multi-Site Network That Won\'t Fall Over',
      summary: 'The redundancy patterns we build into every multi-location network deployment, explained without the vendor pitch.',
      date: 'March 30, 2026',
      readTime: '7 min read',
      icon: 'dns',
    },
  ];
}
