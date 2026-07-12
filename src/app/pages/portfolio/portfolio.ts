import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

interface CaseStudy {
  category: string;
  client: string;
  title: string;
  summary: string;
  result: string;
  tags: string[];
  icon: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, MatIconModule, MatButtonModule, MatChipsModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  protected readonly caseStudies: CaseStudy[] = [
    {
      category: 'Cloud Migration',
      client: 'Brightline Logistics',
      title: 'Zero-downtime migration to AWS for a 200-truck logistics operation',
      summary:
        'Migrated a legacy on-prem dispatch system to a resilient AWS architecture with automated failover, cutting infrastructure costs by 34%.',
      result: '34% lower infrastructure cost',
      tags: ['AWS', 'Migration', 'Cost Optimization'],
      icon: 'cloud_done',
    },
    {
      category: 'Cybersecurity',
      client: 'Parallel Health',
      title: 'HIPAA-aligned security overhaul for a multi-clinic healthcare group',
      summary:
        'Deployed endpoint protection, SIEM monitoring, and staff training across 12 clinics, closing critical compliance gaps ahead of audit.',
      result: 'Passed compliance audit with zero findings',
      tags: ['HIPAA', 'SIEM', 'Compliance'],
      icon: 'shield',
    },
    {
      category: 'Managed IT',
      client: 'Fieldstone Retail',
      title: '24/7 helpdesk rollout across 40 retail locations',
      summary:
        'Stood up a centralized helpdesk and remote monitoring for POS and network systems, reducing store-level downtime dramatically.',
      result: '60% fewer support tickets',
      tags: ['Managed IT', 'Retail', 'Monitoring'],
      icon: 'support_agent',
    },
    {
      category: 'Custom Software',
      client: 'Marlowe Financial',
      title: 'Client portal replacing three disconnected legacy tools',
      summary:
        'Built a unified web portal for document exchange, e-signatures, and reporting, integrated directly with their core banking APIs.',
      result: 'Onboarding time cut from 5 days to 4 hours',
      tags: ['Web App', 'API Integration', 'FinTech'],
      icon: 'dashboard',
    },
    {
      category: 'Network & Infrastructure',
      client: 'Union Manufacturing',
      title: 'Plant-wide network redesign for a 24/7 production facility',
      summary:
        'Redesigned segmented networking across three production lines with redundant failover to eliminate unplanned downtime.',
      result: 'Zero unplanned network downtime in 18 months',
      tags: ['Networking', 'Manufacturing', 'Redundancy'],
      icon: 'dns',
    },
    {
      category: 'IT Strategy',
      client: 'Everwood Realty Group',
      title: 'Technology roadmap ahead of a multi-state expansion',
      summary:
        'Delivered a 3-year IT roadmap and vendor consolidation plan supporting expansion into six new states.',
      result: 'Scaled to 6 new markets on one unified stack',
      tags: ['Strategy', 'Vendor Management', 'Scaling'],
      icon: 'insights',
    },
  ];
}
