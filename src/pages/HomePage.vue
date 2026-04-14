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
                "Write release notes for the new dashboard feature"
              </div>
              <div class="chat-bubble ai">
                "Based on your feature spec and target audience (SMB founders), here's a draft that highlights the time-saving benefits..."
              </div>
            </div>
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
              <h4 class="feature-title">Research Pages</h4>
              <p class="feature-description">
                Notion-style pages for capturing insights, interviews, and market research.
              </p>
            </div>
            <div class="feature-card">
              <h4 class="feature-title">Knowledge Notebooks</h4>
              <p class="feature-description">
                Organized document libraries that AI can reference when you need answers.
              </p>
            </div>
            <div class="feature-card">
              <h4 class="feature-title">Data Synthesis</h4>
              <p class="feature-description">
                AI-powered analysis that turns raw research into actionable insights.
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
              <h4 class="feature-title">Product Pages</h4>
              <p class="feature-description">
                Living documentation that stays in sync with your product evolution.
              </p>
            </div>
            <div class="feature-card">
              <h4 class="feature-title">Feature Kanban</h4>
              <p class="feature-description">
                Visual workflow from idea to shipped, with requirements and bugs attached.
              </p>
            </div>
            <div class="feature-card">
              <h4 class="feature-title">Feedback Forms</h4>
              <p class="feature-description">
                NPS, CSAT, and custom forms. Embed anywhere, track in real-time.
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
              <h4 class="feature-title">Social Outreach</h4>
              <p class="feature-description">
                Plan and generate content for multiple platforms with AI that knows your voice.
              </p>
            </div>
            <div class="feature-card">
              <h4 class="feature-title">CRM</h4>
              <p class="feature-description">
                Track leads, customers, and relationships without switching apps.
              </p>
            </div>
            <div class="feature-card">
              <h4 class="feature-title">Marketing Plans</h4>
              <p class="feature-description">
                Strategy docs that connect to your product roadmap and customer data.
              </p>
            </div>
          </div>
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
import {
  ArrowRight,
  Bot,
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
    .cta-section {
      padding: 60px 20px;
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
    .cta-section {
      padding: 40px 15px;
    }
  }
}
</style>
