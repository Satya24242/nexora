import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

interface Milestone {
  year: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly values: Value[] = [
    {
      icon: 'handshake',
      title: 'Straight Talk',
      description: 'No upselling, no jargon-filled reports. We explain what matters and why.',
    },
    {
      icon: 'bolt',
      title: 'Fast Response',
      description: 'Real humans answer the phone. Most tickets are resolved same-day.',
    },
    {
      icon: 'verified_user',
      title: 'Security First',
      description: 'Every recommendation is weighed against risk, not just convenience.',
    },
    {
      icon: 'trending_up',
      title: 'Built to Scale',
      description: "We design systems for the business you're growing into, not just today's headcount.",
    },
  ];

  protected readonly team: TeamMember[] = [
    { name: 'Elena Vasquez', role: 'CEO & Founder', initials: 'EV' },
    { name: 'Marcus Reid', role: 'Head of Cloud Engineering', initials: 'MR' },
    { name: 'Sofia Petrova', role: 'Head of Cybersecurity', initials: 'SP' },
    { name: 'James Whitfield', role: 'Director of Client Success', initials: 'JW' },
  ];

  protected readonly milestones: Milestone[] = [
    { year: '2013', description: 'Founded as a two-person helpdesk serving local small businesses.' },
    { year: '2016', description: 'Launched managed cloud services after our first AWS migration project.' },
    { year: '2019', description: 'Built out a dedicated cybersecurity practice and SOC.' },
    { year: '2023', description: 'Crossed 250 actively supported clients across North America.' },
  ];
}
