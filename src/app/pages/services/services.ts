import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ServiceDetail {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly services: ServiceDetail[] = [
    {
      icon: 'support_agent',
      title: 'Managed IT Support',
      description:
        'Round-the-clock helpdesk and proactive monitoring so issues get fixed before your team notices them.',
      features: ['24/7 helpdesk & remote support', 'Proactive system monitoring', 'Patch & update management', 'Onsite support when needed'],
    },
    {
      icon: 'cloud',
      title: 'Cloud Solutions',
      description: 'Migration, architecture, and cost optimization across AWS, Azure, and Google Cloud.',
      features: ['Cloud migration & architecture', 'Cost optimization audits', 'Backup & disaster recovery', 'Hybrid & multi-cloud setups'],
    },
    {
      icon: 'security',
      title: 'Cybersecurity',
      description: 'Layered defenses, monitoring, and response plans that keep your data and reputation safe.',
      features: ['24/7 threat monitoring', 'Endpoint & email protection', 'Compliance readiness (SOC 2, HIPAA)', 'Incident response planning'],
    },
    {
      icon: 'code',
      title: 'Custom Software Development',
      description: 'Web and mobile applications built around your exact workflows, not generic templates.',
      features: ['Web & mobile app development', 'API design & integrations', 'Legacy system modernization', 'Ongoing product support'],
    },
    {
      icon: 'dns',
      title: 'Network & Infrastructure',
      description: 'Resilient on-prem, hybrid, and remote-ready networks designed to scale with you.',
      features: ['Network design & deployment', 'Wi-Fi & VPN infrastructure', 'Server & hardware management', 'Uptime & performance monitoring'],
    },
    {
      icon: 'insights',
      title: 'IT Strategy & Consulting',
      description: 'A technology roadmap aligned to your business goals and budget, reviewed quarterly.',
      features: ['Technology roadmapping', 'Budget & vendor management', 'Digital transformation planning', 'Quarterly business reviews'],
    },
  ];
}
