<template>
  <div class="privacy-policy-page">
    <div class="policy-header">
      <h1 class="page-title">Privacy Policy</h1>
      <p class="last-updated">Last updated: {{ formatDate(new Date()) }}</p>
    </div>

    <div class="policy-content">
      <!-- Our Commitment Section -->
      <div class="card policy-section commitment-section">
        <div class="card-header">
          <Lock :size="18" class="icon-primary" />
          <span>Our Commitment to Your Privacy</span>
        </div>
        <div class="card-body section-content">
          <div class="alert alert--success">
            <CheckCircle :size="20" class="alert-icon" />
            <div class="alert-content">
              <p><strong>We Never Sell Your Data</strong></p>
              <p><strong>Molley does not sell, rent, or share your personal data with third parties for commercial purposes.</strong> Your privacy is fundamental to our service, and we are committed to protecting your information.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Information We Collect -->
      <div class="card policy-section">
        <div class="card-header">
          <FileText :size="18" class="icon-primary" />
          <span>Information We Collect</span>
        </div>
        <div class="card-body section-content">
          <h3>Account Information</h3>
          <ul>
            <li>Name and email address when you create an account</li>
            <li>Company information and project details you provide</li>
            <li>Profile information and preferences</li>
          </ul>

          <h3>Usage Information</h3>
          <ul>
            <li>Ideas, documents, and content you create within the platform</li>
            <li>Activity logs and feature usage patterns</li>
            <li>Device information and browser type</li>
          </ul>

          <h3>Technical Information</h3>
          <ul>
            <li>IP address and location data (for security purposes)</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Error logs and performance metrics</li>
          </ul>
        </div>
      </div>

      <!-- How We Use Your Information -->
      <div class="card policy-section">
        <div class="card-header">
          <Settings :size="18" class="icon-primary" />
          <span>How We Use Your Information</span>
        </div>
        <div class="card-body section-content">
          <p>We use your information solely to:</p>
          <ul>
            <li><strong>Provide our service:</strong> Enable idea management, collaboration, and project organization</li>
            <li><strong>Improve our platform:</strong> Analyze usage patterns to enhance features and performance</li>
            <li><strong>Communicate with you:</strong> Send important updates, security notifications, and support responses</li>
            <li><strong>Ensure security:</strong> Protect against fraud, abuse, and unauthorized access</li>
            <li><strong>Comply with legal obligations:</strong> Meet regulatory requirements when necessary</li>
          </ul>
        </div>
      </div>

      <!-- Data Sharing and Third Parties -->
      <div class="card policy-section">
        <div class="card-header">
          <Lock :size="18" class="icon-primary" />
          <span>Data Sharing and Third Parties</span>
        </div>
        <div class="card-body section-content">
          <h3>We Do Not Sell Your Data</h3>
          <p><strong>Molley never sells, rents, or trades your personal information to third parties.</strong></p>

          <h3>Limited Sharing</h3>
          <p>We may share your information only in these specific circumstances:</p>
          <ul>
            <li><strong>Service providers:</strong> Trusted vendors who help us operate our platform (hosting, analytics, support) under strict confidentiality agreements</li>
            <li><strong>Legal requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
            <li><strong>Business transfers:</strong> In the event of a merger or acquisition, with advance notice to users</li>
            <li><strong>With your consent:</strong> When you explicitly authorize us to share specific information</li>
          </ul>

          <h3>Team Collaboration</h3>
          <p>Information you share within your company or project teams is visible to other team members as part of the collaborative features.</p>
        </div>
      </div>

      <!-- Data Security -->
      <div class="card policy-section">
        <div class="card-header">
          <Lock :size="18" class="icon-primary" />
          <span>Data Security</span>
        </div>
        <div class="card-body section-content">
          <p>We implement industry-standard security measures to protect your information:</p>
          <ul>
            <li>Encryption in transit and at rest</li>
            <li>Regular security audits and monitoring</li>
            <li>Access controls and authentication requirements</li>
            <li>Secure data centers and infrastructure</li>
            <li>Employee training on data protection practices</li>
          </ul>
        </div>
      </div>

      <!-- Your Rights -->
      <div class="card policy-section">
        <div class="card-header">
          <User :size="18" class="icon-primary" />
          <span>Your Rights</span>
        </div>
        <div class="card-body section-content">
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correct:</strong> Update or correct inaccurate information</li>
            <li><strong>Delete:</strong> Request deletion of your account and data</li>
            <li><strong>Export:</strong> Download your data in a portable format</li>
            <li><strong>Restrict:</strong> Limit how we process your information</li>
            <li><strong>Object:</strong> Opt out of certain data processing activities</li>
          </ul>
          <p>To exercise these rights, contact us at <strong>support@molley.io</strong></p>
        </div>
      </div>

      <!-- Data Retention -->
      <div class="card policy-section">
        <div class="card-header">
          <Clock :size="18" class="icon-primary" />
          <span>Data Retention</span>
        </div>
        <div class="card-body section-content">
          <p>We retain your information for as long as:</p>
          <ul>
            <li>Your account is active and you continue using our service</li>
            <li>Required to provide you with our services</li>
            <li>Necessary to comply with legal obligations</li>
            <li>Needed to resolve disputes or enforce our agreements</li>
          </ul>
          <p>When you delete your account, we will delete your personal data within 30 days, except where retention is required by law.</p>
        </div>
      </div>

      <!-- Cookies and Tracking -->
      <div class="card policy-section">
        <div class="card-header">
          <Eye :size="18" class="icon-primary" />
          <span>Cookies and Tracking</span>
        </div>
        <div class="card-body section-content">
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Keep you logged in and remember your preferences</li>
            <li>Analyze how you use our platform to improve performance</li>
            <li>Provide security features and prevent fraud</li>
          </ul>
          <p>You can control cookie settings through your browser, though this may affect some functionality.</p>
        </div>
      </div>

      <!-- Browser Extension -->
      <div class="card policy-section">
        <div class="card-header">
          <Download :size="18" class="icon-primary" />
          <span>Browser Extension</span>
        </div>
        <div class="card-body section-content">
          <p>The Molley Research Capture browser extension helps you save web pages to your research notebook. Here's how it handles your data:</p>

          <h3>What the Extension Collects</h3>
          <ul>
            <li><strong>Web page content:</strong> HTML from pages you explicitly select to capture</li>
            <li><strong>Page URLs and titles:</strong> To identify captured content</li>
            <li><strong>Your preferences:</strong> Company selection and group labels (stored locally in your browser)</li>
          </ul>

          <h3>What the Extension Does NOT Collect</h3>
          <ul>
            <li>Browsing history or activity from pages you don't capture</li>
            <li>Data from other browser tabs or windows</li>
            <li>Passwords or sensitive form data</li>
            <li>Personal information beyond what's in your Molley account</li>
          </ul>

          <h3>How Extension Data is Used</h3>
          <ul>
            <li><strong>Content transmission:</strong> Captured pages are sent via HTTPS to Molley servers and stored in your research notebook</li>
            <li><strong>Format conversion:</strong> HTML is converted to markdown for better readability</li>
            <li><strong>Authentication:</strong> Your Molley session token is used to authenticate API requests (stored locally in your browser)</li>
            <li><strong>Local storage:</strong> Preferences are saved in your browser and never sent to our servers</li>
          </ul>

          <h3>Extension Permissions Explained</h3>
          <ul>
            <li><strong>activeTab:</strong> Allows reading content from tabs you select when you click the extension icon (temporary access only)</li>
            <li><strong>scripting:</strong> Enables extracting HTML from pages you choose to capture</li>
            <li><strong>storage:</strong> Saves your preferences locally in your browser</li>
            <li><strong>molley.io access:</strong> Connects to your Molley account to save captured content</li>
          </ul>

          <div class="alert alert--info">
            <Info :size="20" class="alert-icon" />
            <div class="alert-content">
              <p><strong>Privacy-First Design</strong></p>
              <p>The extension only accesses pages when you explicitly click the extension icon and select tabs to capture. It does not monitor your browsing activity or access pages in the background.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Gmail Integration -->
      <div class="card policy-section">
        <div class="card-header">
          <Mail :size="18" class="icon-primary" />
          <span>Gmail Integration</span>
        </div>
        <div class="card-body section-content">
          <p>Molley offers an optional Gmail integration that allows you to send outreach emails directly from the platform. This section describes exactly how we handle your Google account data.</p>

          <h3>What We Access</h3>
          <p>When you connect your Gmail account, we request the following Google OAuth scopes:</p>
          <ul>
            <li><strong>gmail.send</strong> — Send emails on your behalf through the Molley platform</li>
            <li><strong>gmail.compose</strong> — Create email drafts for your review before sending</li>
            <li><strong>gmail.readonly</strong> — Read email metadata to confirm delivery status</li>
            <li><strong>userinfo.email &amp; userinfo.profile</strong> — Identify which Google account is connected</li>
          </ul>

          <h3>How We Use Your Gmail Data</h3>
          <p>Your Gmail data is used <strong>solely</strong> to:</p>
          <ul>
            <li>Send outreach emails you compose and approve within Molley</li>
            <li>Display your connected email address in the integration settings</li>
            <li>Verify delivery status of emails sent through the platform</li>
          </ul>
          <p>We <strong>do not</strong> use your Gmail data for advertising, market research, or any purpose unrelated to the functionality described above.</p>

          <h3>How We Store Your Gmail Credentials</h3>
          <ul>
            <li><strong>OAuth tokens</strong> (access and refresh tokens) are encrypted at rest using AES-256-GCM before being stored in our database</li>
            <li>We never store your Google password</li>
            <li>Tokens are only decrypted server-side at the moment they are needed to make an API call on your behalf</li>
          </ul>

          <h3>What We Do NOT Do</h3>
          <ul>
            <li>We do not read, scan, or index the contents of your inbox</li>
            <li>We do not share your Gmail data with any third party</li>
            <li>We do not sell or use your Gmail data for advertising purposes</li>
            <li>We do not retain email content after it has been sent</li>
          </ul>

          <h3>Revoking Gmail Access</h3>
          <p>You can disconnect your Gmail account at any time by:</p>
          <ul>
            <li>Going to <strong>User Settings &gt; Integrations</strong> in Molley and clicking <strong>Disconnect</strong></li>
            <li>Visiting your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account Permissions</a> page and removing Molley</li>
          </ul>
          <p>When you disconnect, we immediately delete your stored OAuth tokens. No Gmail data is retained after disconnection.</p>

          <h3>Google API Services Compliance</h3>
          <p>Molley's use and transfer of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
        </div>
      </div>

      <!-- Meta (Facebook & Instagram) Integration -->
      <div class="card policy-section">
        <div class="card-header">
          <Share2 :size="18" class="icon-primary" />
          <span>Meta (Facebook &amp; Instagram) Integration</span>
        </div>
        <div class="card-body section-content">
          <p>Molley offers an optional integration with Meta platforms (Facebook and Instagram) that allows you to publish social media content directly from the platform. This section describes exactly how we handle your Meta account data.</p>

          <h3>What We Access</h3>
          <p>When you connect your Facebook or Instagram account, we request the following permissions:</p>
          <ul>
            <li><strong>pages_show_list</strong> — List the Facebook Pages you manage so you can select which page to publish to</li>
            <li><strong>pages_read_engagement</strong> — Read basic engagement data on your posts to display publishing status</li>
            <li><strong>pages_manage_posts</strong> — Create and publish posts to your selected Facebook Page on your behalf</li>
            <li><strong>instagram_basic</strong> — Access basic Instagram account information linked to your Facebook Page</li>
            <li><strong>instagram_content_publish</strong> — Publish content to your Instagram business account on your behalf</li>
          </ul>

          <h3>How We Use Your Meta Data</h3>
          <p>Your Meta data is used <strong>solely</strong> to:</p>
          <ul>
            <li>Display a list of Facebook Pages and Instagram accounts you manage, so you can select where to publish</li>
            <li>Publish social media posts you compose and approve within Molley to your selected pages or accounts</li>
            <li>Display publishing status and confirmation of posted content</li>
          </ul>
          <p>We <strong>do not</strong> use your Meta data for advertising, profiling, market research, or any purpose unrelated to the functionality described above.</p>

          <h3>How We Store Your Meta Credentials</h3>
          <ul>
            <li><strong>OAuth tokens</strong> (Page access tokens) are encrypted at rest using AES-256-GCM before being stored in our database</li>
            <li>We never store your Facebook or Instagram password</li>
            <li>Tokens are only decrypted server-side at the moment they are needed to make an API call on your behalf</li>
          </ul>

          <h3>What We Do NOT Do</h3>
          <ul>
            <li>We do not read, scan, or store your Facebook or Instagram private messages</li>
            <li>We do not access your personal Facebook profile, friends list, or timeline</li>
            <li>We do not sell, share, or transfer your Meta data to any third party</li>
            <li>We do not use your Meta data for advertising or ad targeting purposes</li>
            <li>We do not retain post content after it has been published</li>
          </ul>

          <h3>Revoking Meta Access</h3>
          <p>You can disconnect your Facebook or Instagram account at any time by:</p>
          <ul>
            <li>Going to <strong>Settings &gt; Social Media</strong> in Molley and clicking <strong>Disconnect</strong></li>
            <li>Visiting your <a href="https://www.facebook.com/settings?tab=business_tools" target="_blank" rel="noopener noreferrer">Facebook Business Integrations</a> settings and removing Molley</li>
          </ul>
          <p>When you disconnect, we immediately delete your stored access tokens and associated page data. No Meta data is retained after disconnection.</p>

          <h3>Data Deletion</h3>
          <p>You may request deletion of all Meta-related data we hold by contacting us at <strong>support@molley.io</strong>. Upon receiving a valid deletion request, we will:</p>
          <ul>
            <li>Delete all stored OAuth tokens associated with your Meta accounts</li>
            <li>Remove all connected page and account metadata</li>
            <li>Confirm deletion within 30 days</li>
          </ul>
          <p>You may also initiate deletion through Meta's platform by removing Molley from your <a href="https://www.facebook.com/settings?tab=business_tools" target="_blank" rel="noopener noreferrer">Facebook Business Integrations</a>.</p>

          <h3>Meta Platform Terms Compliance</h3>
          <p>Molley's use of data received from Meta APIs complies with the <a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer">Meta Platform Terms</a> and the <a href="https://developers.facebook.com/policy/" target="_blank" rel="noopener noreferrer">Meta Developer Policies</a>, including all data use restrictions and transparency requirements.</p>
        </div>
      </div>

      <!-- X (Twitter) Integration -->
      <div class="card policy-section">
        <div class="card-header">
          <Share2 :size="18" class="icon-primary" />
          <span>X (formerly Twitter) Integration</span>
        </div>
        <div class="card-body section-content">
          <p>Molley offers an optional integration with X (formerly Twitter) that allows you to publish posts directly from the platform. This section describes exactly how we handle your X account data.</p>

          <h3>What We Access</h3>
          <p>When you connect your X account, we request the following OAuth 2.0 scopes:</p>
          <ul>
            <li><strong>tweet.read</strong> — Read your tweets to confirm publishing status and avoid duplicate posts</li>
            <li><strong>tweet.write</strong> — Post tweets on your behalf from content you compose and approve within Molley</li>
            <li><strong>users.read</strong> — Read your basic profile information (username, display name) to identify the connected account</li>
            <li><strong>offline.access</strong> — Maintain the connection without requiring you to re-authorize each session</li>
          </ul>

          <h3>How We Use Your X Data</h3>
          <p>Your X data is used <strong>solely</strong> to:</p>
          <ul>
            <li>Display your connected X account in the integration settings</li>
            <li>Publish posts you compose and approve within Molley to your X account</li>
            <li>Verify that posts were published successfully</li>
          </ul>
          <p>We <strong>do not</strong> use your X data for advertising, analytics resale, profiling, or any purpose unrelated to the functionality described above.</p>

          <h3>How We Store Your X Credentials</h3>
          <ul>
            <li><strong>OAuth tokens</strong> (access and refresh tokens) are encrypted at rest using AES-256-GCM before being stored in our database</li>
            <li>We never store your X password</li>
            <li>Tokens are only decrypted server-side at the moment they are needed to make an API call on your behalf</li>
          </ul>

          <h3>What We Do NOT Do</h3>
          <ul>
            <li>We do not read, store, or analyse your direct messages</li>
            <li>We do not access your followers list, likes, or bookmarks</li>
            <li>We do not sell, share, or transfer your X data to any third party</li>
            <li>We do not use your X data for advertising or ad targeting purposes</li>
            <li>We do not retain post content after it has been published</li>
          </ul>

          <h3>Revoking X Access</h3>
          <p>You can disconnect your X account at any time by:</p>
          <ul>
            <li>Going to <strong>Settings &gt; Social Media</strong> in Molley and clicking <strong>Disconnect</strong></li>
            <li>Visiting your <a href="https://twitter.com/settings/connected_apps" target="_blank" rel="noopener noreferrer">X Connected Apps</a> settings and revoking Molley's access</li>
          </ul>
          <p>When you disconnect, we immediately delete your stored OAuth tokens. No X data is retained after disconnection.</p>

          <h3>Data Deletion</h3>
          <p>You may request deletion of all X-related data we hold by contacting us at <strong>support@molley.io</strong>. Upon receiving a valid request, we will delete all stored tokens and associated account metadata and confirm deletion within 30 days.</p>

          <h3>X Developer Agreement Compliance</h3>
          <p>Molley's use of data received from X APIs complies with the <a href="https://developer.x.com/en/developer-terms/agreement-and-policy" target="_blank" rel="noopener noreferrer">X Developer Agreement and Policy</a>, including all restrictions on data usage, storage, and display.</p>
        </div>
      </div>

      <!-- LinkedIn Integration -->
      <div class="card policy-section">
        <div class="card-header">
          <Share2 :size="18" class="icon-primary" />
          <span>LinkedIn Integration</span>
        </div>
        <div class="card-body section-content">
          <p>Molley offers an optional integration with LinkedIn that allows you to publish professional content directly from the platform. This section describes exactly how we handle your LinkedIn account data.</p>

          <h3>What We Access</h3>
          <p>When you connect your LinkedIn account, we request the following permissions:</p>
          <ul>
            <li><strong>openid &amp; profile</strong> — Read your basic profile information (name, profile picture) to identify the connected account</li>
            <li><strong>email</strong> — Read your email address to display which LinkedIn account is connected</li>
            <li><strong>w_member_social</strong> — Create and publish posts to your LinkedIn profile or company page on your behalf</li>
          </ul>

          <h3>How We Use Your LinkedIn Data</h3>
          <p>Your LinkedIn data is used <strong>solely</strong> to:</p>
          <ul>
            <li>Display your connected LinkedIn account in the integration settings</li>
            <li>Publish professional content you compose and approve within Molley to your LinkedIn profile or company page</li>
            <li>Verify that posts were published successfully</li>
          </ul>
          <p>We <strong>do not</strong> use your LinkedIn data for recruiting, advertising, profiling, or any purpose unrelated to the functionality described above.</p>

          <h3>How We Store Your LinkedIn Credentials</h3>
          <ul>
            <li><strong>OAuth tokens</strong> (access and refresh tokens) are encrypted at rest using AES-256-GCM before being stored in our database</li>
            <li>We never store your LinkedIn password</li>
            <li>Tokens are only decrypted server-side at the moment they are needed to make an API call on your behalf</li>
          </ul>

          <h3>What We Do NOT Do</h3>
          <ul>
            <li>We do not read, store, or access your LinkedIn messages or connections</li>
            <li>We do not scrape your profile or your connections' profiles</li>
            <li>We do not sell, share, or transfer your LinkedIn data to any third party</li>
            <li>We do not use your LinkedIn data for advertising, recruiting, or profiling purposes</li>
            <li>We do not retain post content after it has been published</li>
          </ul>

          <h3>Revoking LinkedIn Access</h3>
          <p>You can disconnect your LinkedIn account at any time by:</p>
          <ul>
            <li>Going to <strong>Settings &gt; Social Media</strong> in Molley and clicking <strong>Disconnect</strong></li>
            <li>Visiting your <a href="https://www.linkedin.com/psettings/permitted-services" target="_blank" rel="noopener noreferrer">LinkedIn Permitted Services</a> settings and removing Molley</li>
          </ul>
          <p>When you disconnect, we immediately delete your stored OAuth tokens. No LinkedIn data is retained after disconnection.</p>

          <h3>Data Deletion</h3>
          <p>You may request deletion of all LinkedIn-related data we hold by contacting us at <strong>support@molley.io</strong>. Upon receiving a valid request, we will delete all stored tokens and associated account metadata and confirm deletion within 30 days.</p>

          <h3>LinkedIn API Terms Compliance</h3>
          <p>Molley's use of data received from LinkedIn APIs complies with the <a href="https://www.linkedin.com/legal/l/api-terms-of-use" target="_blank" rel="noopener noreferrer">LinkedIn API Terms of Use</a> and the <a href="https://learn.microsoft.com/en-us/linkedin/shared/api-guide/concepts/best-practices" target="_blank" rel="noopener noreferrer">LinkedIn API Best Practices</a>, including all restrictions on data usage, storage, and member privacy.</p>
        </div>
      </div>

      <!-- International Transfers -->
      <div class="card policy-section">
        <div class="card-header">
          <MapPin :size="18" class="icon-primary" />
          <span>International Transfers</span>
        </div>
        <div class="card-body section-content">
          <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy and applicable laws.</p>
        </div>
      </div>

      <!-- Children's Privacy -->
      <div class="card policy-section">
        <div class="card-header">
          <User :size="18" class="icon-primary" />
          <span>Children's Privacy</span>
        </div>
        <div class="card-body section-content">
          <p>Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.</p>
        </div>
      </div>

      <!-- Changes to This Policy -->
      <div class="card policy-section">
        <div class="card-header">
          <Edit :size="18" class="icon-primary" />
          <span>Changes to This Policy</span>
        </div>
        <div class="card-body section-content">
          <p>We may update this privacy policy from time to time. We will notify you of any material changes by:</p>
          <ul>
            <li>Posting the updated policy on this page</li>
            <li>Sending you an email notification</li>
            <li>Providing notice through our platform</li>
          </ul>
          <p>Your continued use of our service after changes become effective constitutes acceptance of the updated policy.</p>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="card policy-section">
        <div class="card-header">
          <Mail :size="18" class="icon-primary" />
          <span>Contact Us</span>
        </div>
        <div class="card-body section-content">
          <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
          <div class="contact-info">
            <p><strong>General Support:</strong> support@molley.io</p>
          </div>
          <p>We will respond to your inquiry within 30 days.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FileText,
  Settings,
  Lock,
  User,
  Clock,
  Eye,
  MapPin,
  Edit,
  Download,
  Mail,
  CheckCircle,
  Info,
  Share2
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

.privacy-policy-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;

  .policy-header {
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

  .policy-content {
    .policy-section {
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

        .alert {
          margin-top: 1rem;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .privacy-policy-page {
    padding: 1rem 0.5rem;

    .policy-header {
      margin-bottom: 2rem;

      .page-title {
        font-size: 2rem;
      }
    }

    .policy-content .policy-section .section-content {
      padding: 1rem 0;

      .contact-info {
        padding: 1rem;
      }
    }
  }
}
</style>
