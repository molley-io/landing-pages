<template>
  <div class="home-public">
    <!-- Hero Section - Hook in 10 seconds -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <p class="hero-eyebrow">Stop juggling 10 different tools</p>
          <h1 class="hero-title">
            Research. Build. Grow.
            <span class="hero-subtitle">One Platform. AI That Gets It.</span>
          </h1>
          <p class="hero-description">
            Molley replaces your scattered stack of Notion, Jira, Confluence, and CRM with one connected workspace — powered by AI that actually knows your business.
          </p>
          <div class="hero-actions">
            <a :href="`${appUrl}/auth/register`" class="btn btn--primary btn--large cta-primary">
              Start Free
              <ArrowRight :size="18" />
            </a>
            <a href="#problem" class="btn btn--default btn--large cta-secondary" @click.prevent="scrollToProblem">
              See How It Works
            </a>
          </div>
          <p class="hero-note">No credit card required</p>
        </div>
        <div class="hero-visual">
          <div class="hero-card">
            <div class="card-header">
              <Bot :size="20" class="card-icon" />
              <span>Molley AI</span>
              <span class="context-badge">Knows your project</span>
            </div>
            <div class="card-content">
              <div class="chat-bubble user">
                "Analyse our user research and suggest what to build next"
              </div>
              <div class="chat-bubble ai">
                "Based on 23 feedback entries and your roadmap, I'd prioritise the dashboard redesign — 68% of users mentioned it. I've drafted a feature spec. Want me to add it to your backlog?"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof Strip -->
    <section class="social-proof-strip">
      <div class="section-content">
        <div class="proof-items">
          <div class="proof-item">
            <span class="proof-number">15+</span>
            <span class="proof-label">Years building products</span>
          </div>
          <div class="proof-divider"></div>
          <div class="proof-item">
            <span class="proof-number">9</span>
            <span class="proof-label">Tools replaced</span>
          </div>
          <div class="proof-divider"></div>
          <div class="proof-item">
            <span class="proof-number">1</span>
            <span class="proof-label">Connected platform</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section - The Pain -->
    <section class="problem-section" id="problem">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">Sound Familiar?</h2>
        </div>
        <div class="problems-grid">
          <div class="problem-card">
            <Layers :size="40" class="problem-icon" />
            <h3 class="problem-title">Tool Chaos</h3>
            <p class="problem-description">
              Research in Notion. Features in Jira. Docs in Confluence. CRM in HubSpot. Marketing in... where was that again?
            </p>
          </div>
          <div class="problem-card">
            <Brain :size="40" class="problem-icon" />
            <h3 class="problem-title">AI That Doesn't Know You</h3>
            <p class="problem-description">
              Every ChatGPT session starts from zero. Copy-paste context. Explain your product. Again. And again.
            </p>
          </div>
          <div class="problem-card">
            <Unplug :size="40" class="problem-icon" />
            <h3 class="problem-title">Nothing Connects</h3>
            <p class="problem-description">
              Your research doesn't inform your features. Your features don't connect to your marketing. Everything lives in silos.
            </p>
          </div>
        </div>
        <div class="section-cta">
          <a :href="`${appUrl}/auth/register`" class="btn btn--primary btn--large">
            Break Free From Tool Chaos
            <ArrowRight :size="18" />
          </a>
        </div>
      </div>
    </section>

    <!-- Solution Section - The Answer -->
    <section class="solution-section">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">One Platform That Does It All</h2>
          <p class="section-description">
            We spent 15 years battling tool bloat. In 2025, we built what we always wanted — a single, connected platform for research, product development, and growth.
          </p>
        </div>
        <div class="solution-highlight">
          <div class="highlight-card">
            <Sparkles :size="48" class="highlight-icon" />
            <h3 class="highlight-title">AI That Actually Knows Your Business</h3>
            <p class="highlight-description">
              Molley AI automatically understands your company, projects, and features. Ask it to write docs, analyze feedback, or brainstorm ideas — it already has the context.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section - Progressive Detail -->
    <section class="features-section" id="features">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">Everything You Need, Connected</h2>
        </div>

        <div class="feature-category">
          <div class="category-header">
            <Search :size="24" class="category-icon" />
            <h3 class="category-title">Research &amp; Discovery</h3>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <h4 class="feature-title">Research Notebooks</h4>
              <p class="feature-description">
                Rich documents with AI-powered synthesis. Highlight key findings and let Molley summarize patterns across all your research.
              </p>
            </div>
            <div class="feature-card">
              <h4 class="feature-title">URL Import &amp; Analysis</h4>
              <p class="feature-description">
                Drop in any URL — competitor pages, articles, docs — and AI extracts, summarizes, and indexes the content for you.
              </p>
            </div>
            <div class="feature-card">
              <h4 class="feature-title">Cross-Reference Insights</h4>
              <p class="feature-description">
                Ask questions across all your research. Molley cross-references notes, imports, and data to surface insights you'd miss.
              </p>
            </div>
          </div>
        </div>

        <div class="feature-category">
          <div class="category-header">
            <Boxes :size="24" class="category-icon" />
            <h3 class="category-title">Product Development</h3>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <h4 class="feature-title">AI Product Strategy</h4>
              <p class="feature-description">
                Describe your product and Molley generates strategy docs, competitive positioning, and go-to-market recommendations.
              </p>
            </div>
            <div class="feature-card">
              <h4 class="feature-title">Smart Feature Board</h4>
              <p class="feature-description">
                AI creates feature specs from conversations. Drag through your workflow — idea, spec, in progress, shipped — with linked requirements and bugs.
              </p>
            </div>
            <div class="feature-card">
              <h4 class="feature-title">Customer Feedback</h4>
              <p class="feature-description">
                Embed NPS, CSAT, and custom forms anywhere. AI analyses responses and links insights directly to your feature roadmap.
              </p>
            </div>
          </div>
        </div>

        <div class="feature-category">
          <div class="category-header">
            <TrendingUp :size="24" class="category-icon" />
            <h3 class="category-title">Growth &amp; Marketing</h3>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <h4 class="feature-title">AI Content Studio</h4>
              <p class="feature-description">
                Generate platform-specific posts, threads, and campaigns. Molley knows your product and writes content that sounds like you, not a robot.
              </p>
            </div>
            <div class="feature-card">
              <h4 class="feature-title">Pipeline CRM</h4>
              <p class="feature-description">
                Track opportunities from lead to close with weighted pipeline analytics. AI enriches contacts and suggests next actions.
              </p>
            </div>
            <div class="feature-card">
              <h4 class="feature-title">Growth Playbooks</h4>
              <p class="feature-description">
                AI-generated go-to-market strategies that pull from your product data, customer feedback, and competitive research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mid-page CTA -->
    <section class="mid-cta-section">
      <div class="section-content">
        <div class="section-cta">
          <p class="mid-cta-text">All of this, in one workspace. No more tab switching.</p>
          <a :href="`${appUrl}/auth/register`" class="btn btn--primary btn--large">
            Try It Free
            <ArrowRight :size="18" />
          </a>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works-section">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">Get Started in Minutes</h2>
        </div>

        <div class="steps-container">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">Create Your Company</h3>
              <p class="step-description">
                Tell Molley about your business. This becomes the foundation for AI that actually understands you.
              </p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">Add Your Projects</h3>
              <p class="step-description">
                Each product or initiative gets its own workspace with research, features, and growth tools.
              </p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">Start Building</h3>
              <p class="step-description">
                Capture research, plan features, track bugs, manage outreach — all in one place, all connected.
              </p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3 class="step-title">Let AI Help</h3>
              <p class="step-description">
                Ask Molley AI anything. It knows your context and gives relevant answers without the copy-paste dance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section" id="pricing">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">Simple, Transparent Pricing</h2>
          <p class="section-description">Start free. Upgrade when you're ready. No surprises.</p>
        </div>
        <div class="pricing-grid pricing-grid--two">
          <div class="pricing-card">
            <div class="pricing-header">
              <h3 class="pricing-name">Solo</h3>
              <div class="pricing-price">
                <span class="price-currency">&pound;</span>
                <span class="price-amount">5</span>
                <span class="price-period">/month</span>
              </div>
              <p class="pricing-annual">or &pound;48/year (save 20%)</p>
              <p class="pricing-description">For individual founders and makers</p>
            </div>
            <ul class="pricing-features">
              <li><Check :size="16" class="check-icon" /> Unlimited projects</li>
              <li><Check :size="16" class="check-icon" /> Research &amp; product notebooks</li>
              <li><Check :size="16" class="check-icon" /> AI assistant &amp; agentic mode</li>
              <li><Check :size="16" class="check-icon" /> Feature management &amp; Kanban</li>
              <li><Check :size="16" class="check-icon" /> Feedback forms (NPS, CSAT)</li>
              <li><Check :size="16" class="check-icon" /> CRM &amp; pipeline analytics</li>
              <li><Check :size="16" class="check-icon" /> Social outreach tools</li>
              <li><Check :size="16" class="check-icon" /> Data synthesis &amp; insights</li>
            </ul>
            <a :href="`${appUrl}/auth/register`" class="btn btn--primary btn--large pricing-cta">
              Get Started
            </a>
          </div>
          <div class="pricing-card pricing-card--featured">
            <div class="pricing-badge">For Teams</div>
            <div class="pricing-header">
              <h3 class="pricing-name">Company</h3>
              <div class="pricing-price">
                <span class="price-currency">&pound;</span>
                <span class="price-amount">10</span>
                <span class="price-period">/seat/month</span>
              </div>
              <p class="pricing-annual">or &pound;100/seat/year (save 20%)</p>
              <p class="pricing-description">For teams building products together</p>
            </div>
            <ul class="pricing-features">
              <li><Check :size="16" class="check-icon" /> Everything in Solo</li>
              <li><Check :size="16" class="check-icon" /> Team collaboration</li>
              <li><Check :size="16" class="check-icon" /> Role-based permissions</li>
              <li><Check :size="16" class="check-icon" /> Shared workspaces</li>
              <li><Check :size="16" class="check-icon" /> Team AI context</li>
              <li><Check :size="16" class="check-icon" /> Priority support</li>
            </ul>
            <a :href="`${appUrl}/auth/register`" class="btn btn--primary btn--large pricing-cta">
              Get Started
            </a>
          </div>
        </div>
        <p class="pricing-note">No credit card required to get started &bull; Need more AI? Buy additional Molley AI credits anytime</p>
      </div>
    </section>

    <!-- Who It's For Section -->
    <section class="audience-section">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">Built For Builders</h2>
        </div>
        <div class="audience-grid">
          <div class="audience-card">
            <Rocket :size="40" class="audience-icon" />
            <h3 class="audience-title">Solo Founders</h3>
            <p class="audience-description">
              Stop paying for 10 tools. Get everything you need to research, build, and grow in one place.
            </p>
          </div>
          <div class="audience-card">
            <Target :size="40" class="audience-icon" />
            <h3 class="audience-title">Product Managers</h3>
            <p class="audience-description">
              From feature ideation to release, with AI that writes specs, analyzes feedback, and keeps docs fresh.
            </p>
          </div>
          <div class="audience-card">
            <Users :size="40" class="audience-icon" />
            <h3 class="audience-title">Small Teams</h3>
            <p class="audience-description">
              Collaborate without the enterprise complexity. Everyone sees the same context, AI included.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" id="faq">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="faq-item"
            :class="{ 'faq-item--open': faq.open }"
          >
            <button class="faq-question" @click="faq.open = !faq.open">
              <span>{{ faq.question }}</span>
              <ChevronDown :size="20" class="faq-chevron" />
            </button>
            <div v-if="faq.open" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="section-content">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Simplify Your Stack?</h2>
          <p class="cta-description">
            Join builders who replaced their tool chaos with one connected platform.
          </p>
          <div class="cta-actions">
            <a :href="`${appUrl}/auth/register`" class="btn btn--primary btn--large cta-primary">
              Start Free Today
              <ArrowRight :size="18" />
            </a>
          </div>
          <p class="cta-note">No credit card required &bull; Set up in 5 minutes</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Layers,
  Brain,
  Unplug,
  Sparkles,
  Search,
  Boxes,
  TrendingUp,
  Users,
  Rocket,
  Target
} from 'lucide-vue-next'

const appUrl = import.meta.env.VITE_APP_URL || ''

const scrollToProblem = () => {
  const element = document.getElementById('problem')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const faqs = reactive([
  {
    question: 'What does "AI that knows your business" actually mean?',
    answer: 'When you create your company and projects in Molley, the AI automatically understands your context — your product, features, research, and customers. When you ask it to write docs, analyse feedback, or brainstorm ideas, it already has the background. No copy-pasting context into ChatGPT.',
    open: false,
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. Your data is encrypted at rest and in transit. We never sell or share your data with third parties. Molley is registered in England (Company No. 17143035) and complies with UK GDPR. Payments are processed securely by Stripe.',
    open: false,
  },
  {
    question: 'Can I import from Notion, Jira, or other tools?',
    answer: 'You can import content via URL — drop in any link and Molley AI will extract and index the content. Direct integrations with Notion, Jira, and other tools are on our roadmap.',
    open: false,
  },
  {
    question: 'What\'s included in the Solo plan?',
    answer: 'The Solo plan at \u00a35/month gives you unlimited projects with full access to research notebooks, product pages, feature management, AI assistant with agentic mode, CRM, feedback forms, social outreach, and data synthesis. Save 20% with annual billing at \u00a348/year.',
    open: false,
  },
  {
    question: 'How does billing work?',
    answer: 'Sign up and explore Molley with no credit card required. When you\'re ready, choose Solo (\u00a35/mo) for individual use or Company (\u00a310/seat/mo) for team collaboration. Both plans offer 20% off with annual billing.',
    open: false,
  },
  {
    question: 'What happens to my data if I downgrade?',
    answer: 'Your data is never deleted. If you cancel, you keep read access to everything. You can resubscribe anytime to regain full editing capabilities.',
    open: false,
  },
])
</script>

<style lang="scss" scoped>
.home-public {
  width: 100%;

  .section-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 48px;

    .section-title {
      font-size: 36px;
      font-weight: 700;
      color: var(--el-text-color-primary);
      margin: 0 0 16px 0;
    }

    .section-description {
      font-size: var(--el-font-size-large);
      color: var(--el-text-color-regular);
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }

  .hero-section {
    background: linear-gradient(135deg, var(--el-bg-color) 0%, var(--el-bg-color-page) 100%);
    padding: 80px 20px;
    min-height: 600px;
    display: flex;
    align-items: center;

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;

      .hero-text {
        .hero-eyebrow {
          font-size: var(--el-font-size-medium);
          color: var(--el-color-primary);
          font-weight: 600;
          margin: 0 0 16px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          color: var(--el-text-color-primary);
          margin: 0 0 24px 0;

          .hero-subtitle {
            display: block;
            font-size: 32px;
            color: var(--el-color-danger);
            margin-top: 8px;
          }
        }

        .hero-description {
          font-size: var(--el-font-size-large);
          color: var(--el-text-color-regular);
          line-height: 1.6;
          margin: 0 0 32px 0;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 16px;

          .cta-primary {
            padding: 16px 32px;
            font-size: var(--el-font-size-medium);
            font-weight: 600;
          }

          .cta-secondary {
            padding: 16px 32px;
            font-size: var(--el-font-size-medium);
          }
        }

        .hero-note {
          font-size: var(--el-font-size-small);
          color: var(--el-text-color-secondary);
          margin: 0;
        }
      }

      .hero-visual {
        display: flex;
        justify-content: center;

        .hero-card {
          background: var(--el-bg-color);
          border-radius: var(--el-border-radius-base);
          box-shadow: var(--el-box-shadow-base);
          padding: 24px;
          max-width: 420px;
          width: 100%;

          .card-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
            border: none;
            padding: 0;

            .card-icon {
              color: var(--el-color-primary);
            }

            span {
              font-weight: 600;
              color: var(--el-text-color-primary);
            }

            .context-badge {
              font-size: var(--el-font-size-extra-small);
              font-weight: 500;
              color: var(--el-color-success);
              background: var(--el-color-success-light-9);
              padding: 4px 8px;
              border-radius: var(--el-border-radius-small);
              margin-left: auto;
            }
          }

          .card-content {
            display: flex;
            flex-direction: column;
            gap: 12px;

            .chat-bubble {
              padding: 12px 16px;
              border-radius: var(--el-border-radius-base);
              font-size: var(--el-font-size-base);
              line-height: 1.5;

              &.ai {
                background: var(--el-color-primary-light-9);
                color: var(--el-text-color-primary);
                align-self: flex-start;
                max-width: 90%;
              }

              &.user {
                background: var(--el-bg-color-page);
                color: var(--el-text-color-primary);
                align-self: flex-end;
                max-width: 90%;
                border: 1px solid var(--el-border-color-lighter);
              }
            }
          }
        }
      }
    }
  }

  .problem-section {
    padding: 80px 20px;
    background: var(--el-bg-color-page);

    .problems-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;

      .problem-card {
        text-align: center;
        padding: 32px 24px;

        .problem-icon {
          color: var(--el-color-danger);
          margin-bottom: 20px;
        }

        .problem-title {
          font-size: var(--el-font-size-large);
          font-weight: 600;
          color: var(--el-text-color-primary);
          margin: 0 0 12px 0;
        }

        .problem-description {
          font-size: var(--el-font-size-base);
          color: var(--el-text-color-regular);
          line-height: 1.6;
          margin: 0;
        }
      }
    }
  }

  .solution-section {
    padding: 80px 20px;
    background: var(--el-bg-color);

    .solution-highlight {
      max-width: 800px;
      margin: 0 auto;

      .highlight-card {
        background: linear-gradient(135deg, var(--el-color-primary-light-9) 0%, var(--el-color-primary-light-8) 100%);
        border-radius: var(--el-border-radius-base);
        padding: 48px;
        text-align: center;
        border: 1px solid var(--el-color-primary-light-7);

        .highlight-icon {
          color: var(--el-color-primary);
          margin-bottom: 24px;
        }

        .highlight-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--el-text-color-primary);
          margin: 0 0 16px 0;
        }

        .highlight-description {
          font-size: var(--el-font-size-large);
          color: var(--el-text-color-regular);
          line-height: 1.6;
          margin: 0;
        }
      }
    }
  }

  .features-section {
    padding: 80px 20px;
    background: var(--el-bg-color-page);

    .feature-category {
      margin-bottom: 48px;

      &:last-child {
        margin-bottom: 0;
      }

      .category-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 24px;

        .category-icon {
          color: var(--el-color-primary);
        }

        .category-title {
          font-size: var(--el-font-size-extra-large);
          font-weight: 600;
          color: var(--el-text-color-primary);
          margin: 0;
        }
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;

        .feature-card {
          background: var(--el-bg-color);
          border-radius: var(--el-border-radius-base);
          padding: 24px;
          border: 1px solid var(--el-border-color-lighter);
          transition: all var(--el-transition-duration);

          &:hover {
            box-shadow: var(--el-box-shadow-light);
            transform: translateY(-2px);
          }

          .feature-title {
            font-size: var(--el-font-size-medium);
            font-weight: 600;
            color: var(--el-text-color-primary);
            margin: 0 0 8px 0;
          }

          .feature-description {
            font-size: var(--el-font-size-base);
            color: var(--el-text-color-regular);
            line-height: 1.5;
            margin: 0;
          }
        }
      }
    }
  }

  .how-it-works-section {
    padding: 80px 20px;
    background: var(--el-bg-color);

    .section-content {
      max-width: 900px;
    }

    .steps-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;

      .step {
        display: flex;
        align-items: flex-start;
        gap: 16px;

        .step-number {
          width: 40px;
          height: 40px;
          background: var(--el-color-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--el-font-size-medium);
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-content {
          flex: 1;

          .step-title {
            font-size: var(--el-font-size-medium);
            font-weight: 600;
            color: var(--el-text-color-primary);
            margin: 0 0 8px 0;
          }

          .step-description {
            font-size: var(--el-font-size-base);
            color: var(--el-text-color-regular);
            line-height: 1.5;
            margin: 0;
          }
        }
      }
    }
  }

  .audience-section {
    padding: 80px 20px;
    background: var(--el-bg-color-page);

    .audience-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;

      .audience-card {
        background: var(--el-bg-color);
        border-radius: var(--el-border-radius-base);
        padding: 32px 24px;
        text-align: center;
        border: 1px solid var(--el-border-color-lighter);

        .audience-icon {
          color: var(--el-color-primary);
          margin-bottom: 20px;
        }

        .audience-title {
          font-size: var(--el-font-size-large);
          font-weight: 600;
          color: var(--el-text-color-primary);
          margin: 0 0 12px 0;
        }

        .audience-description {
          font-size: var(--el-font-size-base);
          color: var(--el-text-color-regular);
          line-height: 1.5;
          margin: 0;
        }
      }
    }
  }

  .cta-section {
    padding: 80px 20px;
    background: linear-gradient(135deg, var(--el-color-primary-light-9) 0%, var(--el-color-primary-light-8) 100%);

    .section-content {
      max-width: 800px;
    }

    .cta-content {
      text-align: center;

      .cta-title {
        font-size: 36px;
        font-weight: 700;
        color: var(--el-text-color-primary);
        margin: 0 0 16px 0;
      }

      .cta-description {
        font-size: var(--el-font-size-large);
        color: var(--el-text-color-regular);
        line-height: 1.6;
        margin: 0 0 32px 0;
      }

      .cta-actions {
        margin-bottom: 16px;

        .cta-primary {
          padding: 20px 40px;
          font-size: var(--el-font-size-large);
          font-weight: 600;
        }
      }

      .cta-note {
        font-size: var(--el-font-size-small);
        color: var(--el-text-color-secondary);
        margin: 0;
      }
    }
  }

  .social-proof-strip {
    padding: 32px 20px;
    background: var(--el-bg-color);
    border-bottom: 1px solid var(--el-border-color-lighter);

    .proof-items {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
    }

    .proof-item {
      text-align: center;
    }

    .proof-number {
      display: block;
      font-size: 32px;
      font-weight: 700;
      color: var(--el-color-primary);
      line-height: 1;
    }

    .proof-label {
      display: block;
      font-size: var(--el-font-size-small);
      color: var(--el-text-color-secondary);
      margin-top: 4px;
    }

    .proof-divider {
      width: 1px;
      height: 40px;
      background: var(--el-border-color-lighter);
    }
  }

  .section-cta {
    text-align: center;
    margin-top: 40px;
  }

  .mid-cta-section {
    padding: 48px 20px;
    background: var(--el-bg-color);
    text-align: center;

    .section-cta {
      margin-top: 0;
    }

    .mid-cta-text {
      font-size: var(--el-font-size-large);
      color: var(--el-text-color-regular);
      margin: 0 0 24px 0;
    }
  }

  .pricing-section {
    padding: 80px 20px;
    background: var(--el-bg-color);

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      max-width: 1000px;
      margin: 0 auto;

      &--two {
        grid-template-columns: repeat(2, 1fr);
        max-width: 700px;
      }
    }

    .pricing-card {
      background: var(--el-bg-color);
      border: 1px solid var(--el-border-color-lighter);
      border-radius: var(--el-border-radius-base);
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all var(--el-transition-duration);

      &:hover {
        box-shadow: var(--el-box-shadow-light);
        transform: translateY(-2px);
      }

      &--featured {
        border-color: var(--el-color-primary);
        box-shadow: var(--el-box-shadow-light);
      }
    }

    .pricing-badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--el-color-primary);
      color: #fff;
      font-size: var(--el-font-size-extra-small);
      font-weight: 600;
      padding: 4px 16px;
      border-radius: var(--el-border-radius-round);
      white-space: nowrap;
    }

    .pricing-header {
      text-align: center;
      margin-bottom: 24px;
    }

    .pricing-name {
      font-size: var(--el-font-size-large);
      font-weight: 600;
      color: var(--el-text-color-primary);
      margin: 0 0 12px 0;
    }

    .pricing-price {
      margin-bottom: 8px;
    }

    .price-currency {
      font-size: var(--el-font-size-large);
      font-weight: 600;
      color: var(--el-text-color-primary);
      vertical-align: top;
    }

    .price-amount {
      font-size: 40px;
      font-weight: 700;
      color: var(--el-text-color-primary);
      line-height: 1;
    }

    .price-period {
      font-size: var(--el-font-size-base);
      color: var(--el-text-color-secondary);
    }

    .pricing-annual {
      font-size: var(--el-font-size-small);
      color: var(--el-color-success);
      font-weight: 500;
      margin: 4px 0 8px 0;
    }

    .pricing-description {
      font-size: var(--el-font-size-base);
      color: var(--el-text-color-secondary);
      margin: 0;
    }

    .pricing-features {
      list-style: none;
      padding: 0;
      margin: 0 0 24px 0;
      flex: 1;

      li {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 0;
        font-size: var(--el-font-size-base);
        color: var(--el-text-color-regular);
        border-bottom: 1px solid var(--el-border-color-extra-light);

        &:last-child {
          border-bottom: none;
        }

        .check-icon {
          color: var(--el-color-success);
          flex-shrink: 0;
        }
      }
    }

    .pricing-cta {
      width: 100%;
    }

    .pricing-note {
      text-align: center;
      font-size: var(--el-font-size-small);
      color: var(--el-text-color-secondary);
      margin: 32px 0 0 0;
    }
  }

  .faq-section {
    padding: 80px 20px;
    background: var(--el-bg-color-page);

    .section-content {
      max-width: 800px;
    }

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .faq-item {
      background: var(--el-bg-color);
      border: 1px solid var(--el-border-color-lighter);
      border-radius: var(--el-border-radius-base);
      overflow: hidden;
      transition: border-color var(--el-transition-duration);

      &--open {
        border-color: var(--el-color-primary-light-7);
      }
    }

    .faq-question {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border: none;
      background: transparent;
      cursor: pointer;
      text-align: left;
      font-size: var(--el-font-size-medium);
      font-weight: 500;
      color: var(--el-text-color-primary);
      gap: 16px;

      .faq-chevron {
        transition: transform var(--el-transition-duration);
        color: var(--el-text-color-secondary);
        flex-shrink: 0;
      }
    }

    .faq-item--open .faq-question .faq-chevron {
      transform: rotate(180deg);
    }

    .faq-answer {
      padding: 0 20px 16px;

      p {
        margin: 0;
        font-size: var(--el-font-size-base);
        color: var(--el-text-color-regular);
        line-height: 1.6;
      }
    }
  }
}

@media (max-width: 992px) {
  .home-public {
    .problem-section .problems-grid,
    .features-section .feature-category .features-grid,
    .audience-section .audience-grid {
      grid-template-columns: 1fr;
    }

    .how-it-works-section .steps-container {
      grid-template-columns: 1fr;
    }

    .pricing-section .pricing-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 0 auto;

      &--two {
        max-width: 400px;
      }
    }
  }
}

@media (max-width: 768px) {
  .home-public {
    .section-header .section-title {
      font-size: 28px;
    }

    .hero-section {
      padding: 60px 20px;
      min-height: auto;

      .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;

        .hero-text {
          .hero-title {
            font-size: 36px;

            .hero-subtitle {
              font-size: 24px;
            }
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;

            .cta-primary,
            .cta-secondary {
              width: 100%;
            }
          }
        }
      }
    }

    .problem-section,
    .solution-section,
    .features-section,
    .how-it-works-section,
    .audience-section,
    .pricing-section,
    .faq-section,
    .cta-section {
      padding: 60px 20px;
    }

    .mid-cta-section {
      padding: 40px 20px;
    }

    .social-proof-strip .proof-items {
      gap: 24px;
    }

    .solution-section .solution-highlight .highlight-card {
      padding: 32px 24px;
    }

    .how-it-works-section .steps-container .step {
      flex-direction: column;
      text-align: center;
      gap: 12px;
    }

    .cta-section .cta-content .cta-title {
      font-size: 28px;
    }
  }
}

@media (max-width: 480px) {
  .home-public {
    .hero-section {
      padding: 40px 15px;

      .hero-content .hero-text {
        .hero-title {
          font-size: 28px;

          .hero-subtitle {
            font-size: 20px;
          }
        }
      }
    }

    .problem-section,
    .solution-section,
    .features-section,
    .how-it-works-section,
    .audience-section,
    .pricing-section,
    .faq-section,
    .cta-section {
      padding: 40px 15px;
    }

    .mid-cta-section {
      padding: 32px 15px;
    }

    .social-proof-strip {
      .proof-items {
        flex-direction: column;
        gap: 20px;
      }

      .proof-divider {
        width: 40px;
        height: 1px;
      }
    }
  }
}
</style>
