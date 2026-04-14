<template>
  <div class="terms-of-use-page">
    <div class="terms-header">
      <h1 class="page-title">Terms of Use</h1>
      <p class="last-updated">Last updated: {{ formatDate(new Date()) }}</p>
    </div>

    <div class="terms-content">
      <!-- Acceptance of Terms -->
      <div class="card terms-section">
        <div class="card-header">
          <FileText :size="18" class="icon-primary" />
          <span>Acceptance of Terms</span>
        </div>
        <div class="card-body section-content">
          <p>By accessing and using Molley ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

          <p>These Terms of Use constitute a legally binding agreement between you and Molley regarding your use of the Service. By creating an account or using any part of the Service, you acknowledge that you have read, understood, and agree to be bound by these terms.</p>
        </div>
      </div>

      <!-- Service Description -->
      <div class="card terms-section">
        <div class="card-header">
          <Settings :size="18" class="icon-primary" />
          <span>Service Description</span>
        </div>
        <div class="card-body section-content">
          <p>Molley is an idea management and collaboration platform that enables teams and organizations to:</p>
          <ul>
            <li>Create, organize, and manage ideas and projects</li>
            <li>Collaborate with team members in real-time</li>
            <li>Track project progress and manage workflows</li>
            <li>Store and organize documents and content</li>
            <li>Communicate and share feedback within teams</li>
          </ul>

          <p>We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice. We may also impose limits on certain features or restrict access to parts of the Service without notice or liability.</p>
        </div>
      </div>

      <!-- User Accounts and Registration -->
      <div class="card terms-section">
        <div class="card-header">
          <User :size="18" class="icon-primary" />
          <span>User Accounts and Registration</span>
        </div>
        <div class="card-body section-content">
          <h3>Account Creation</h3>
          <p>To use certain features of the Service, you must register for an account. You agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and update your account information</li>
            <li>Keep your password secure and confidential</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
          </ul>

          <h3>Account Eligibility</h3>
          <p>You must be at least 13 years old to create an account. If you are under 18, you represent that you have your parent's or guardian's permission to use the Service.</p>
        </div>
      </div>

      <!-- Acceptable Use Policy -->
      <div class="card terms-section">
        <div class="card-header">
          <Lock :size="18" class="icon-primary" />
          <span>Acceptable Use Policy</span>
        </div>
        <div class="card-body section-content">
          <h3>Prohibited Activities</h3>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li><strong>Upload illegal content:</strong> Post, transmit, or share any content that is illegal, harmful, threatening, abusive, defamatory, vulgar, obscene, or otherwise objectionable</li>
            <li><strong>Violate intellectual property:</strong> Infringe on copyrights, trademarks, patents, or other proprietary rights</li>
            <li><strong>Spam or harass:</strong> Send unsolicited communications, spam, or engage in harassment of other users</li>
            <li><strong>Distribute malware:</strong> Upload viruses, malware, or other malicious code</li>
            <li><strong>Impersonate others:</strong> Pretend to be another person or entity</li>
            <li><strong>Interfere with service:</strong> Attempt to disrupt, damage, or impair the Service or its security</li>
            <li><strong>Violate privacy:</strong> Collect personal information about other users without consent</li>
            <li><strong>Commercial misuse:</strong> Use the Service for unauthorized commercial purposes or resale</li>
          </ul>

          <h3>Content Standards</h3>
          <p>All content you submit must:</p>
          <ul>
            <li>Comply with applicable laws and regulations</li>
            <li>Respect the rights and dignity of others</li>
            <li>Be appropriate for a professional collaboration environment</li>
            <li>Not contain confidential information of third parties without authorization</li>
          </ul>
        </div>
      </div>

      <!-- User Content and Intellectual Property -->
      <div class="card terms-section">
        <div class="card-header">
          <Edit :size="18" class="icon-primary" />
          <span>User Content and Intellectual Property</span>
        </div>
        <div class="card-body section-content">
          <h3>Your Content</h3>
          <p>You retain ownership of all content you create, upload, or share through the Service ("User Content"). By using the Service, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, and display your User Content solely for the purpose of providing and improving the Service.</p>

          <h3>Our Intellectual Property</h3>
          <p>The Service, including its design, functionality, and underlying technology, is owned by Molley and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works based on our intellectual property.</p>

          <h3>Feedback</h3>
          <p>Any feedback, suggestions, or ideas you provide about the Service may be used by us without any obligation to compensate you.</p>
        </div>
      </div>

      <!-- Privacy and Data Protection -->
      <div class="card terms-section">
        <div class="card-header">
          <Eye :size="18" class="icon-primary" />
          <span>Privacy and Data Protection</span>
        </div>
        <div class="card-body section-content">
          <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>

          <p>By using the Service, you consent to the collection, use, and sharing of your information as described in our Privacy Policy.</p>
        </div>
      </div>

      <!-- Service Availability and Modifications -->
      <div class="card terms-section">
        <div class="card-header">
          <Clock :size="18" class="icon-primary" />
          <span>Service Availability and Modifications</span>
        </div>
        <div class="card-body section-content">
          <h3>Service Availability</h3>
          <p>We strive to maintain high availability but do not guarantee that the Service will be available 100% of the time. The Service may be temporarily unavailable due to maintenance, updates, or technical issues.</p>

          <h3>Service Modifications</h3>
          <p>We reserve the right to modify, update, or discontinue any aspect of the Service at any time. We will provide reasonable notice of significant changes when possible.</p>
        </div>
      </div>

      <!-- Limitation of Liability -->
      <div class="card terms-section">
        <div class="card-header">
          <AlertTriangle :size="18" class="icon-primary" />
          <span>Limitation of Liability</span>
        </div>
        <div class="card-body section-content">
          <h3>Disclaimer of Warranties</h3>
          <p>The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>

          <h3>Limitation of Liability</h3>
          <p>To the maximum extent permitted by law, Molley shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of the Service.</p>

          <h3>Maximum Liability</h3>
          <p>Our total liability to you for any claims arising from these Terms or your use of the Service shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
        </div>
      </div>

      <!-- Indemnification -->
      <div class="card terms-section">
        <div class="card-header">
          <Lock :size="18" class="icon-primary" />
          <span>Indemnification</span>
        </div>
        <div class="card-body section-content">
          <p>You agree to indemnify, defend, and hold harmless Molley and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from:</p>
          <ul>
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your User Content</li>
            <li>Your violation of any third-party rights</li>
          </ul>
        </div>
      </div>

      <!-- Termination -->
      <div class="card terms-section">
        <div class="card-header">
          <X :size="18" class="icon-primary" />
          <span>Termination</span>
        </div>
        <div class="card-body section-content">
          <h3>Termination by You</h3>
          <p>You may terminate your account at any time by contacting us or using the account deletion feature in your settings.</p>

          <h3>Termination by Us</h3>
          <p>We may suspend or terminate your account immediately if you:</p>
          <ul>
            <li>Violate these Terms of Use</li>
            <li>Engage in prohibited activities</li>
            <li>Fail to pay applicable fees</li>
            <li>Pose a security risk to the Service or other users</li>
          </ul>

          <h3>Effect of Termination</h3>
          <p>Upon termination, your right to use the Service will cease immediately. We may delete your account and User Content, though some information may be retained as required by law or for legitimate business purposes.</p>
        </div>
      </div>

      <!-- Dispute Resolution -->
      <div class="card terms-section">
        <div class="card-header">
          <MessageSquare :size="18" class="icon-primary" />
          <span>Dispute Resolution</span>
        </div>
        <div class="card-body section-content">
          <h3>Governing Law</h3>
          <p>These Terms are governed by and construed in accordance with the laws of the jurisdiction where Molley is incorporated, without regard to conflict of law principles.</p>

          <h3>Dispute Resolution Process</h3>
          <p>Before filing any legal action, you agree to first contact us to attempt to resolve any disputes informally. If we cannot resolve the dispute within 30 days, either party may pursue formal legal remedies.</p>
        </div>
      </div>

      <!-- General Provisions -->
      <div class="card terms-section">
        <div class="card-header">
          <FileText :size="18" class="icon-primary" />
          <span>General Provisions</span>
        </div>
        <div class="card-body section-content">
          <h3>Changes to Terms</h3>
          <p>We may update these Terms from time to time. We will notify you of material changes by email or through the Service. Your continued use after changes become effective constitutes acceptance of the updated Terms.</p>

          <h3>Severability</h3>
          <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>

          <h3>Entire Agreement</h3>
          <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and Molley regarding the Service.</p>

          <h3>Assignment</h3>
          <p>You may not assign or transfer your rights under these Terms without our written consent. We may assign our rights and obligations without restriction.</p>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="card terms-section">
        <div class="card-header">
          <MessageSquare :size="18" class="icon-primary" />
          <span>Contact Information</span>
        </div>
        <div class="card-body section-content">
          <p>If you have questions about these Terms of Use, please contact us:</p>
          <div class="contact-info">
            <p><strong>General Support:</strong> support@molley.io</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FileText,
  Settings,
  User,
  Lock,
  Edit,
  Eye,
  Clock,
  AlertTriangle,
  X,
  MessageSquare
} from 'lucide-vue-next'

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style lang="scss" scoped>
.icon-primary {
  color: var(--el-color-primary);
  flex-shrink: 0;
}

.terms-of-use-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;

  .terms-header {
    text-align: center;
    margin-bottom: 3rem;

    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--el-text-color-primary);
      margin-bottom: 0.5rem;
    }

    .last-updated {
      color: var(--el-text-color-secondary);
      font-size: var(--el-font-size-base);
      margin: 0;
    }
  }

  .terms-content {
    .terms-section {
      margin-bottom: 2rem;

      &:last-child {
        margin-bottom: 0;
      }

      .section-content {
        padding: 1.5rem 0;
        line-height: 1.7;

        h3 {
          color: var(--el-text-color-primary);
          font-size: var(--el-font-size-medium);
          font-weight: 600;
          margin: 1.5rem 0 1rem 0;

          &:first-child {
            margin-top: 0;
          }
        }

        ul {
          margin: 1rem 0;
          padding-left: 1.5rem;

          li {
            margin-bottom: 0.5rem;
            line-height: 1.6;

            strong {
              color: var(--el-text-color-primary);
            }
          }
        }

        p {
          margin: 1rem 0;
          color: var(--el-text-color-regular);

          &:first-child {
            margin-top: 0;
          }

          &:last-child {
            margin-bottom: 0;
          }

          strong {
            color: var(--el-text-color-primary);
          }
        }

        .contact-info {
          background: var(--el-bg-color-page);
          padding: 1.5rem;
          border-radius: var(--el-border-radius-base);
          margin: 1rem 0;

          p {
            margin: 0.5rem 0;

            &:first-child {
              margin-top: 0;
            }

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .terms-of-use-page {
    padding: 1rem 0.5rem;

    .terms-header {
      margin-bottom: 2rem;

      .page-title {
        font-size: 2rem;
      }
    }

    .terms-content .terms-section .section-content {
      padding: 1rem 0;

      .contact-info {
        padding: 1rem;
      }
    }
  }
}
</style>
