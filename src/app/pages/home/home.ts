import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Stat {
  value: string;
  label: string;
}

interface ServiceSummary {
  icon: string;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly stats: Stat[] = [
    { value: '250+', label: 'Businesses supported' },
    { value: '99.9%', label: 'Average uptime delivered' },
    { value: '15 min', label: 'Average response time' },
    { value: '12 yrs', label: 'In managed IT services' },
  ];

  protected readonly services: ServiceSummary[] = [
    {
      icon: 'support_agent',
      title: 'Managed IT Support',
      description: '24/7 helpdesk and proactive monitoring so your team never loses a workday to tech issues.',
    },
    {
      icon: 'cloud',
      title: 'Cloud Solutions',
      description: 'Migration, architecture, and optimization across AWS, Azure, and Google Cloud.',
    },
    {
      icon: 'security',
      title: 'Cybersecurity',
      description: 'Threat detection, compliance, and incident response to keep your data safe.',
    },
    {
      icon: 'code',
      title: 'Custom Software',
      description: 'Web and mobile applications engineered around your exact workflows.',
    },
    {
      icon: 'dns',
      title: 'Network & Infrastructure',
      description: 'Design, deployment, and maintenance of resilient on-prem and hybrid networks.',
    },
    {
      icon: 'insights',
      title: 'IT Strategy & Consulting',
      description: 'Roadmaps that align your technology investments with business goals.',
    },
  ];

  protected readonly steps: Step[] = [
    { number: '01', title: 'Discovery Call', description: 'We assess your current systems, pain points, and goals.' },
    { number: '02', title: 'Tailored Plan', description: 'You get a clear roadmap and pricing — no jargon, no surprises.' },
    { number: '03', title: 'Seamless Rollout', description: 'Our team implements with minimal disruption to your operations.' },
    { number: '04', title: 'Ongoing Support', description: 'Proactive monitoring and a dedicated team keep you running.' },
  ];

  protected readonly testimonials: Testimonial[] = [
    {
      quote:
        "Nexora rebuilt our entire network over a weekend with zero downtime. Our team didn't even notice the switch.",
      name: 'Maria Chen',
      role: 'COO, Brightline Logistics',
    },
    {
      quote:
        'Their security team caught a phishing campaign targeting our finance department before anyone clicked. That alone paid for the contract.',
      name: 'David Okafor',
      role: 'CFO, Parallel Health',
    },
    {
      quote:
        "We've cut IT tickets by 60% since switching to Nexora's managed support. Response times are honestly impressive.",
      name: 'Priya Nair',
      role: 'Operations Director, Fieldstone Retail',
    },
  ];
}
