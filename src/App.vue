<template>
  <!-- 全屏过渡动画组件 -->
  <div name="fullscreen-fade">
    <div class="fullscreen-transition" ref="fullscreenEl"></div>
  </div>
  <div class="main-container">
    <section class="home section-column" id="home">
      <nav class="navbar glass">
        <img class="logo" src="./assets/logo.png" alt="Ye Han" />
        <button class="nav-toggle" type="button" :class="{ open: isMenuOpen }" :aria-expanded="isMenuOpen" aria-label="Toggle navigation" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-menu" :class="{ open: isMenuOpen }">
          <li>
            <a href="#home" @click="closeMenu">{{ $t("navbar.home") }}</a>
          </li>
          <li>
            <a href="#about-me" @click="closeMenu">{{ $t("navbar.aboutMe") }}</a>
          </li>
          <li>
            <a href="#my-skill" @click="closeMenu">{{ $t("navbar.skill") }}</a>
          </li>
          <li>
            <a href="#my-blog" @click="closeMenu">{{ $t("navbar.blog") }}</a>
          </li>
          <li>
            <a href="#my-contacts" @click="closeMenu">{{ $t("navbar.contacts") }}</a>
          </li>
          <li @click="closeMenu"><LanguageSwitcher /></li>
        </ul>
      </nav>
      <div class="main-title showup">
        <h1 class="main-welcome">{{ $t("home.welcome") }}</h1>
      </div>
      <div class="main-contact showup">
        <ul>
          <li>
            <a class="mail" href="mailto:mr.yehan@outlook.com">
              <svg class="icon contact-icon" viewBox="0 0 64 64" aria-hidden="true">
                <path d="M63.125,9.977c-0.902-1.321-2.419-2.194-4.131-2.194H5.006c-1.676,0-3.158,0.842-4.067,2.117l31.16,25.982L63.125,9.977z"/>
                <path d="M0.006,14.328v36.889c0,2.75,2.25,5,5,5h53.988c2.75,0,5-2.25,5-5V14.461L32.099,41.09L0.006,14.328z"/>
              </svg>
            </a>
          </li>
          <li>
            <a class="phone" href="tel:+8613547977610">
              <svg class="icon contact-icon" viewBox="0 0 50 50" aria-hidden="true">
                <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"/>
              </svg>
            </a>
          </li>
          <li>
            <a
              class="github"
              target="_blank"
              href="https://github.com/fearlesshann"
            >
              <svg class="icon contact-icon" viewBox="0 0 50 50" aria-hidden="true">
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div class="main-job showup">
        <p>{{ $t("home.jobTitle") }}</p>
      </div>
      <!-- 向下滚动提示箭头 -->
      <div class="scroll-notice">
        <svg class="icon scroll-icon" viewBox="0 0 256 256" aria-hidden="true">
          <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"/>
        </svg>
      </div>
    </section>
    <section class="about-me section-row glass" id="about-me">
      <div class="my-picture showup">
        <picture>
          <source srcset="./assets/me.avif" type="image/avif" />
          <source srcset="./assets/me.webp" type="image/webp" />
          <img src="./assets/me.jpg" alt="YeHan" loading="lazy" decoding="async" />
        </picture>
      </div>
      <div class="my-introduction showup">
        <h5>{{ $t("home.info") }}</h5>
        <h5>{{ $t("home.info1") }}{{ ex }}{{ $t("home.info2") }}</h5>
        <h5>{{ $t("home.info3") }}</h5>
      </div>
    </section>
    <section class="my-skill section-column glass" id="my-skill">
      <div class="my-skill-part showup"><p class="hardSkills">{{ $t("skills.hardSkills") }}</p></div>
      <div class="my-skill-part showup my-skill-grid">
        <div title="C#" class="skill-item">
          <svg class="skill-icon" aria-hidden="true">
            <use href="#icon-csharp"></use>
          </svg><h3 class="skill-name">{{ ex + '+ ' + $t("skills.years") }}</h3>
        </div>
        <div title="SQL" class="skill-item">
          <svg class="skill-icon" aria-hidden="true">
            <use href="#icon-sql"></use>
          </svg><h3 class="skill-name">{{ ex + '+ ' + $t("skills.years") }}</h3>
        </div>
        <div title="JavaScript" class="skill-item">
          <svg class="skill-icon" aria-hidden="true">
            <use href="#icon-javascript"></use>
          </svg><h3 class="skill-name">{{ ex + '+ ' + $t("skills.years") }}</h3>
        </div>
        <div title="VUE" class="skill-item">
          <svg class="skill-icon" aria-hidden="true">
            <use href="#icon-vue"></use>
          </svg><h3 class="skill-name">{{ ex - 1 + '+ ' + $t("skills.years") }}</h3>
        </div>
      </div>
      <div class="my-skill-part showup"><p class="bonusSkills">{{ $t("skills.bonusSkills") }}</p></div>
      <div class="my-skill-part showup my-skill-grid">
        <div class="skill-item">
          <svg class="skill-icon" aria-hidden="true"><use href="#icon-rabbitmq"></use></svg><h3 class="skill-name">{{ $t("skills.rabbitmq") }}</h3>
        </div>
        <div class="skill-item">
          <svg class="skill-icon" aria-hidden="true"><use href="#icon-redis"></use></svg><h3 class="skill-name">{{ $t("skills.redis") }}</h3>
        </div>
        <div class="skill-item">
          <svg class="skill-icon" aria-hidden="true"><use href="#icon-git"></use></svg><h3 class="skill-name">{{ $t("skills.git") }}</h3>
        </div>
        <div class="skill-item">
          <svg class="skill-icon" aria-hidden="true"><use href="#icon-github-mark"></use></svg><h3 class="skill-name">{{ $t("skills.github") }}</h3>
        </div>
        <div class="skill-item">
          <svg class="skill-icon" aria-hidden="true"><use href="#icon-html"></use></svg><h3 class="skill-name">{{ $t("skills.html") }}</h3>
        </div>
        <div class="skill-item">
          <svg class="skill-icon" aria-hidden="true"><use href="#icon-css"></use></svg><h3 class="skill-name">{{ $t("skills.css") }}</h3>
        </div>
        <div class="skill-item">
          <svg class="skill-icon" aria-hidden="true"><use href="#icon-linux"></use></svg><h3 class="skill-name">{{ $t("skills.linux") }}</h3>
        </div>
        <div class="skill-item">
          <svg class="skill-icon" aria-hidden="true"><use href="#icon-docker"></use></svg><h3 class="skill-name">{{ $t("skills.docker") }}</h3>
        </div>
        <div class="skill-item">
          <svg class="skill-icon" aria-hidden="true"><use href="#icon-nginx"></use></svg><h3 class="skill-name">{{ $t("skills.nginx") }}</h3>
        </div>
        <div class="skill-item">
          <svg class="skill-icon" aria-hidden="true"><use href="#icon-nodejs"></use></svg><h3 class="skill-name">{{ $t("skills.nodejs") }}</h3>
        </div>
        <div class="skill-item">
          <svg class="skill-icon" aria-hidden="true"><use href="#icon-cicd"></use></svg><h3 class="skill-name">{{ $t("skills.cicd") }}</h3>
        </div>
        <div class="skill-item">
          <svg class="skill-icon" aria-hidden="true"><use href="#icon-unit-test"></use></svg><h3 class="skill-name">{{ $t("skills.unitTest") }}</h3>
        </div>
      </div>
    </section>
    <section class="my-blog section-column glass" id="my-blog">
      <div class="my-blog-head showup">
        <p class="section-kicker">{{ experience.head.kicker }}</p>
        <h2 class="section-title">{{ experience.head.title }}</h2>
        <p class="section-subtitle">{{ experience.head.subtitle }}</p>
      </div>
      <div class="timeline-wrapper">
        <div class="timeline-block">
          <div class="timeline-block-title">
            <span class="timeline-tag">{{ experience.work.label }}</span>
          </div>
          <div class="timeline-list">
            <article
              v-for="(item, index) in experience.work.items"
              :key="`work-${index}`"
              class="timeline-item showup"
            >
              <span class="timeline-dot"></span>
              <div class="timeline-card">
                <div class="timeline-meta">
                  <span class="timeline-date">{{ item.date }}</span>
                  <span class="timeline-role">{{ item.role }}</span>
                </div>
                <h3 class="timeline-company">{{ item.company }}</h3>
                <ul class="timeline-points">
                  <li v-for="(point, pIndex) in item.points" :key="`work-point-${index}-${pIndex}`">
                    {{ point }}
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
        <div class="timeline-block">
          <div class="timeline-block-title">
            <span class="timeline-tag">{{ experience.projects.label }}</span>
          </div>
          <div class="timeline-list">
            <article
              v-for="(item, index) in experience.projects.items"
              :key="`project-${index}`"
              class="timeline-item showup"
            >
              <span class="timeline-dot"></span>
              <div class="timeline-card">
                <div class="timeline-meta">
                  <span class="timeline-date">{{ item.date }}</span>
                  <span class="timeline-role">{{ item.role }}</span>
                </div>
                <ul class="timeline-points">
                  <li v-for="(point, pIndex) in item.points" :key="`project-point-${index}-${pIndex}`">
                    {{ point }}
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section
      class="my-contacts section-column glass"
      id="my-contacts"
    >
      <div class="my-contacts-head showup">
        <p class="section-kicker">{{ $t("contacts.kicker") }}</p>
        <h2 class="section-title">{{ $t("contacts.title") }}</h2>
        <p class="section-subtitle">{{ $t("contacts.subtitle") }}</p>
      </div>
      <div class="contacts-grid showup">
        <a class="contact-card" :href="contactEmailHref">
          <span class="contact-icon-wrap">
            <svg class="icon contact-icon" viewBox="0 0 64 64" aria-hidden="true">
              <path d="M63.125,9.977c-0.902-1.321-2.419-2.194-4.131-2.194H5.006c-1.676,0-3.158,0.842-4.067,2.117l31.16,25.982L63.125,9.977z"/>
              <path d="M0.006,14.328v36.889c0,2.75,2.25,5,5,5h53.988c2.75,0,5-2.25,5-5V14.461L32.099,41.09L0.006,14.328z"/>
            </svg>
          </span>
          <div class="contact-info">
            <p class="contact-label">{{ $t("contacts.email.label") }}</p>
            <p class="contact-value">{{ contactEmail }}</p>
          </div>
          <button
            class="contact-copy"
            type="button"
            @click.stop.prevent="copyContact('email', contactEmail)"
          >
            {{ copiedKey === "email" ? $t("contacts.copied") : $t("contacts.copy") }}
          </button>
        </a>
        <a class="contact-card" :href="$t('contacts.phone.href')">
          <span class="contact-icon-wrap">
            <svg class="icon contact-icon" viewBox="0 0 50 50" aria-hidden="true">
              <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"/>
            </svg>
          </span>
          <div class="contact-info">
            <p class="contact-label">{{ $t("contacts.phone.label") }}</p>
            <p class="contact-value">{{ $t("contacts.phone.value") }}</p>
          </div>
          <button
            class="contact-copy"
            type="button"
            @click.stop.prevent="copyContact('phone', $t('contacts.phone.value'))"
          >
            {{ copiedKey === "phone" ? $t("contacts.copied") : $t("contacts.copy") }}
          </button>
        </a>
        <a class="contact-card" target="_blank" :href="$t('contacts.github.href')">
          <span class="contact-icon-wrap">
            <svg class="icon contact-icon" viewBox="0 0 50 50" aria-hidden="true">
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>
            </svg>
          </span>
          <div class="contact-info">
            <p class="contact-label">{{ $t("contacts.github.label") }}</p>
            <p class="contact-value">{{ $t("contacts.github.value") }}</p>
          </div>
          <button
            class="contact-copy"
            type="button"
            @click.stop.prevent="copyContact('github', $t('contacts.github.href'))"
          >
            {{ copiedKey === "github" ? $t("contacts.copied") : $t("contacts.copy") }}
          </button>
        </a>
      </div>
    </section>
    <section class="footer section-column glass" id="footer">
      <p class="copyright">Copyright © {{ year }} by YeHan</p>
      <p class="copyright">All rights reserved.</p><a class="copyright" href="https://beian.mps.gov.cn/#/query/webSearch?code=32059002007564" rel="noreferrer" target="_blank"><img style="width: 15px;height: 15px;" src="/src/assets/备案图标.png" alt="">苏公网安备32059002007564号</a><a class="copyright" href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2026005340号</a>
    </section>
  </div>
</template>

<script setup>
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const fullscreenEl = ref(null);
const year = new Date().getFullYear();
const ex = new Date().getFullYear() - 2021;
let observer;
const isMenuOpen = ref(false);
const { tm, t } = useI18n();
const emptyExperience = {
  head: { kicker: "", title: "", subtitle: "" },
  work: { label: "", items: [] },
  projects: { label: "", items: [] },
};
const experience = computed(() => {
  const data = tm("experience");
  return data && typeof data === "object" ? data : emptyExperience;
});
const normalizeEmail = (value) =>
  value.replace("(at)", "@").replace("[at]", "@");
const contactEmail = computed(() => normalizeEmail(t("contacts.email.value")));
const contactEmailHref = computed(() => `mailto:${contactEmail.value}`);
const copiedKey = ref(null);
let copiedTimer;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};


const copyContact = async (key, value) => {
  if (!value) return;
  try {
    await navigator.clipboard.writeText(value);
    copiedKey.value = key;
    if (copiedTimer) {
      clearTimeout(copiedTimer);
    }
    copiedTimer = setTimeout(() => {
      copiedKey.value = null;
    }, 1500);
  } catch (err) {
    console.error("Copy failed", err);
  }
};


// 组件挂载后执�?
onMounted(() => {
  startScrollAnimation();
  window.addEventListener("language-changed", handleLanguageChanged);
});

// 组件卸载时移除事件监听，防止内存泄漏
onUnmounted(() => {
  window.removeEventListener("language-changed", handleLanguageChanged);
  if (copiedTimer) {
    clearTimeout(copiedTimer);
  }
  if (observer) {
    observer.disconnect();
  }
});

// 监听自定义事�?
const handleLanguageChanged = () => {
  if (!fullscreenEl.value) return;
  fullscreenEl.value.classList.add("transition-animation");
  setTimeout(() => {
    if (!fullscreenEl.value) return;
    fullscreenEl.value.classList.remove("transition-animation");
  }, 1000);
};

function startScrollAnimation() {
  const elements = document.querySelectorAll(".showup");
  if (!elements.length) return;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showup-animation");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "0px 0px -50px 0px",
    }
  );
  elements.forEach((element) => observer.observe(element));
}

</script>

<style scoped>

* {
  color: rgb(228, 228, 228);
}

h5,h3,p {
  font-weight: 300;
}

.icon {
  display: inline-block;
  fill: currentColor;
}

.contact-icon {
  width: 50px;
  height: 50px;
  color: inherit;
  fill: currentColor;
  transition: color 0.5s ease, fill 0.5s ease, box-shadow 0.5s ease;
}

.contact-icon use {
  fill: currentColor;
}

.contact-icon path {
  fill: currentColor;
}

.scroll-icon {
  width: 45px;
  height: 45px;
  color: rgba(178, 13, 49, 0.8) !important;
  fill: currentColor;
}

.scroll-icon use {
  fill: rgba(178, 13, 49, 0.8) !important;
}


.scroll-icon path {
  fill: rgba(178, 13, 49, 0.8) !important;
}

.scroll-notice .scroll-icon path {
  fill: rgba(178, 13, 49, 0.8) !important;
}

.fullscreen-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  height: 100dvh;
  z-index: 9999; /* 确保置于所有内容之�?*/
  pointer-events: none; /* 允许下方内容被点击（虽然被遮住） */
}

.main-welcome {
  text-align: center;
  letter-spacing: 10px;
  font-size: 50px;
  font-weight: 500;
  border: solid rgb(178, 13, 49) 3px;
  box-shadow: 0 0 50px rgba(178, 13, 49, 0.205);
  padding: 15px 130px;
  color: rgb(228, 228, 228);
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.main-container::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(122, 122, 122, 0.075)
    ),
    image-set(
      url("./assets/pic1.avif") type("image/avif"),
      url("./assets/pic1.webp") type("image/webp"),
      url("./assets/pic1.jpg") type("image/jpeg")
    );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


.home {
  min-height: 100vh;
  min-height: 100svh;
  min-height: 100dvh;
  position: relative;
}

.logo {
  width: 40px;
  height: auto;
}

.section-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* 确保容器占满视窗 */
  width: 100%;
  padding: 0% 10%;
}

.section-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* 确保容器占满视窗 */
  width: 100%;
  padding: 0% 10%;
}



/* 毛玻璃导航栏 */
  .navbar {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 12px 2rem;
  background: rgba(82, 116, 155, 0.11);
  z-index: 1000;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  transition: all 0.3s ease;
}

  .navbar p {
  color: rgb(228, 228, 228);
  font-size: 1.5rem;
  font-weight: 700;
}

.glass {
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.nav-menu {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 0.8rem;
  margin-left: auto;
  height: 100%; /* 关键：让 ul 占满父容器高度，便于内部项对�?*/
}

.nav-toggle {
  display: none;
  margin-left: auto;
  width: 44px;
  height: 36px;
  border: 1px solid rgba(228, 228, 228, 0.35);
  border-radius: 10px;
  background: transparent;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 8px;
}

.nav-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: rgb(228, 228, 228);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.nav-toggle.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.nav-toggle.open span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
/* 为所�?li，包括语言切换器，统一样式 */
.nav-menu > li {
  display: flex; /* �?li 本身也是 flex 容器 */
  align-items: center; /* 使其内容垂直居中 */
  height: 100%; /* li 高度撑满父级 ul */
  transition: transform 0.3s ease;
}

.nav-menu li a {
  color: rgb(228, 228, 228);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 0.3s ease;
}

.nav-menu li {
  transition: transform 0.3s ease;
}

.nav-menu li:hover {
  transform: scale(1.3);
  font-weight: 100;
}

.nav-menu li:active {
  transform: scale(1);
  font-weight: 100;
}

.nav-menu li a:active {
  color: rgb(178, 13, 49);
}

/* 使用伪元素实现覆盖后的动态下划线 */
.nav-menu li a::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 3px;
  transform: translateX(-50%);
  height: 2px;
  width: 0px;
  background: rgb(178, 13, 49);
  transition: width 0.3s;
}

.nav-menu li a:hover::after {
  width: 50%;
}

@keyframes updown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}

.scroll-notice {
  position: absolute;
  bottom: 5%;
  animation: updown 2s infinite;
}

.about-me {
  height: 600px;
  background-color: rgba(39, 39, 39, 0.51);
  gap: 8%;
}

.main-contact {
  margin-top: 50px;
}

.main-contact ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-contact li {
  list-style: none;
  margin: 0% 20px;
}

.main-contact li a {
  color: rgb(228, 228, 228);
  display: inline-flex;
  align-items: center;
  transition: color 0.5s ease, box-shadow 0.5s ease;
}

.main-contact li a * {
  transition: color 0.5s ease, fill 0.5s ease, box-shadow 0.5s ease;
}

.main-contact li a:hover {
  color: rgb(178, 13, 49);
}

.main-contact li a:hover .contact-icon {
  color: rgb(178, 13, 49);
  box-shadow: 0 0 50px rgba(178, 13, 49, 0.205);
}

.main-contact li a:hover .contact-icon path {
  fill: rgb(178, 13, 49);
}

.main-job {
  margin-top: 30px;
  margin-bottom: 100px;
  letter-spacing: 5px;
  font-size: 1.5rem;
  font-weight: 200;
  color: rgb(228, 228, 228);
}

.my-picture {
  height: 70%;
  overflow: clip;
  box-shadow: 20px 20px 2px rgba(178, 13, 49, 0.822);
}

.my-picture img {
  height: 100%;
  transition: all 0.6s;
}

.my-picture img:hover {
  transform: scale(1.5);
}

.my-introduction {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: rgb(228, 228, 228);
  font-size: 1.3rem;
  font-weight: 400;
  width: 35%;
}

.my-introduction h5 {
  margin: 0 0 8px;
}

.my-skill {
  height: 800px;
}

.my-skill-part {
  width: 80%;
  margin: 20px 0;
}

.hardSkills, .bonusSkills{
  font-size: 24px;
  font-weight: 500;
}

.hardSkills::before,.bonusSkills::before {
  content: "";
  position: absolute;
  transform: translateX(-10px);
  height: 36px;
  width: 2px;
  background-color: rgb(178, 13, 49);
}

.my-skill-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  place-items: center;
}

.my-skill-grid .skill-icon {
  width: 48px;
  height: 48px;
  color: rgb(228, 228, 228);
  fill: currentColor;
  display: inline-block;
  transition: color 0.5s ease, fill 0.5s ease, box-shadow 0.5s ease;
}

.my-skill-grid .skill-icon use {
  fill: currentColor;
}

.skill-item {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 15px;
  padding: 20px 0;
  width: 180px;
  color: rgb(228, 228, 228);
}

.skill-item .skill-name {
  color: inherit;
}

.skill-item:hover .skill-icon {
  box-shadow: 0 0 50px rgba(178, 13, 49, 0.205);
}

.skill-item * {
  transition: color 0.5s ease, fill 0.5s ease;
}

.skill-item:hover * {
  color: rgb(178, 13, 49) !important;
  fill: rgb(178, 13, 49) !important;
}
.my-blog {
  height: auto;
  min-height: 100vh;
  background-color: rgba(39, 39, 39, 0.51);
  padding: 80px 10%;
  align-items: stretch;
  justify-content: flex-start;
  gap: 32px;
}

.my-blog-head {
  text-align: left;
  width: 100%;
}

.section-kicker {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.85rem;
  color: rgba(228, 228, 228, 0.6);
  margin: 0 0 6px;
}

.section-title {
  font-size: 2.2rem;
  margin: 0 0 8px;
  color: rgb(228, 228, 228);
}

.section-subtitle {
  margin: 0;
  color: rgba(228, 228, 228, 0.75);
  font-size: 1rem;
}

.timeline-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}

.timeline-block {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.timeline-block-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.timeline-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(178, 13, 49, 0.5);
  color: rgb(228, 228, 228);
  font-size: 0.95rem;
  letter-spacing: 1px;
  background: rgba(178, 13, 49, 0.12);
}

.timeline-list {
  position: relative;
  padding-left: 36px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}


.timeline-list::before {
  content: "";
  position: absolute;
  left: 14px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(178, 13, 49, 0.65),
    rgba(228, 228, 228, 0.05)
  );
}

.timeline-item {
  position: relative;
  padding-left: 24px;
}

.timeline-dot {
  position: absolute;
  left: 5px;
  top: 12px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgb(178, 13, 49);
  box-shadow: 0 0 18px rgba(178, 13, 49, 0.6);
  border: 3px solid rgba(39, 39, 39, 0.85);
}

.timeline-card {
  background: rgba(10, 10, 10, 0.45);
  border: 1px solid rgba(228, 228, 228, 0.08);
  border-radius: 16px;
  padding: 20px 22px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.3);
}

.timeline-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  font-size: 0.95rem;
  color: rgba(228, 228, 228, 0.7);
  margin-bottom: 8px;
}

.timeline-date {
  padding: 2px 10px;
  border-radius: 999px;
  background: rgba(228, 228, 228, 0.08);
}

.timeline-role {
  color: rgba(228, 228, 228, 0.85);
}

.timeline-company {
  margin: 0 0 10px;
  font-size: 1.2rem;
  color: rgb(228, 228, 228);
}

.timeline-points {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
  color: rgba(228, 228, 228, 0.78);
  line-height: 1.6;
}

.timeline-points li::marker {
  color: rgb(178, 13, 49);
}

.my-contacts {
  height: 900px;
  background-color: rgba(204, 204, 204, 0.11);
}

.my-contacts {
  height: auto;
  min-height: 70vh;
  padding: 80px 10%;
  align-items: stretch;
  justify-content: flex-start;
  gap: 32px;
}

.my-contacts-head {
  text-align: left;
  width: 100%;
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  width: 100%;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  border-radius: 18px;
  background: rgba(10, 10, 10, 0.45);
  border: 1px solid rgba(228, 228, 228, 0.1);
  text-decoration: none;
  color: rgb(228, 228, 228);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  border-color: rgb(178, 13, 49);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
}

.contact-icon-wrap {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

.contact-label {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(228, 228, 228, 0.65);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.contact-value {
  margin: 0;
  font-size: 1rem;
  color: rgb(228, 228, 228);
  font-weight: 600;
  word-break: break-word;
}

.contact-copy {
  border: 1px solid rgba(228, 228, 228, 0.2);
  background: rgba(228, 228, 228, 0.08);
  color: rgb(228, 228, 228);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.contact-copy:hover {
  border-color: rgb(178, 13, 49);
  color: rgb(178, 13, 49);
  background: rgba(178, 13, 49, 0.12);
}

@media (max-width: 980px) {
  .contacts-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .contacts-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: 14px 16px;
  }

  .contact-copy {
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .contact-label {
    font-size: 0.8rem;
  }

  .contact-value {
    font-size: 0.95rem;
  }
}

.footer {
  height: 100px;
  background-color: rgba(39, 39, 39, 0.51);
}

.about-me,
.my-skill,
.my-blog,
.my-contacts,
.footer {
  content-visibility: auto;
  contain-intrinsic-size: 1px 800px;
}

.copyright {
  color: rgba(228, 228, 228, 0.753);
  text-decoration: none;
  display: inline-block;
  font-size: small;
}

/**
 * 动效
 */
@keyframes showup {
  0% {
    opacity: 0;
    top: 200px;
  }

  50% {
    opacity: 1;
    top: -30px;
  }

  100% {
    opacity: 1;
    top: 0;
  }
}

@keyframes transition {
  0% {
    opacity: 0;
  }

  50% {
    backdrop-filter: blur(35px);
    -webkit-backdrop-filter: blur(35px);
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.showup {
  opacity: 0;
  visibility: hidden;
}

.showup-animation {
  opacity: 1;
  animation: showup 0.8s;
  position: relative;
  visibility: visible;
}

@media (prefers-reduced-motion: reduce) {
  .showup-animation {
    opacity: 1;
    transform: none;
  }
}

.transition-animation {
  animation: transition 1s;
}
@media (max-width: 768px) {
  .footer .copyright {
    font-size: 0.85rem;
  }
  .main-container::before {
    background-attachment: scroll;
  }

  .navbar {
    padding: 10px 16px;
  }

  .nav-toggle {
    display: inline-flex;
  }

  .nav-menu {
    position: fixed;
    top: 64px;
    right: 16px;
    left: 16px;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    margin-left: 0;
    height: auto;
    background: rgba(20, 20, 20, 0.75);
    border: 1px solid rgba(228, 228, 228, 0.1);
    border-radius: 16px;
    transform: translateY(-10px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-menu.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .nav-menu li:hover {
    transform: none;
  }

  .main-welcome {
    font-size: 28px;
    padding: 10px 24px;
    letter-spacing: 4px;
  }

  .main-contact ul {
    flex-wrap: wrap;
    gap: 12px;
  }

  .main-job {
    font-size: 1rem;
    letter-spacing: 2px;
    text-align: center;
  }

  .about-me {
    flex-direction: column;
    height: auto;
    padding: 40px 8%;
    gap: 32px;
  }

  .my-picture {
    width: 70%;
    height: auto;
    margin-bottom: 24px;
  }

  .my-picture img {
    width: 100%;
    height: auto;
  }

  .my-introduction {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: rgb(228, 228, 228);
  font-size: 1.3rem;
  font-weight: 400;
  width: 35%;
}

.my-introduction h5 {
  margin: 0 0 8px;
}

.my-skill {
    height: auto;
    padding: 40px 8%;
  }

  .my-skill-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .skill-item {
    width: 100%;
    gap: 10px;
    padding: 12px 0;
  }

  .my-blog,
  .my-contacts {
    height: auto;
    padding: 40px 8%;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 0.95rem;
  }

  .timeline-list {
    padding-left: 28px;
  }

  .timeline-card {
    padding: 18px;
  }

  .timeline-company {
    font-size: 1.1rem;
  }

  .footer {
    height: auto;
    padding: 20px 8%;
    text-align: center;
  }
  .my-introduction {
    width: 100%;
    font-size: 1rem;
  }

}

@media (max-width: 480px) {
  .footer .copyright {
    font-size: 0.78rem;
  }
  .navbar {
    padding: 8px 12px;
  }

  .logo {
    width: 32px;
  }

  .nav-menu {
    top: 56px;
    left: 12px;
    right: 12px;
    padding: 14px;
  }

  .main-welcome {
    font-size: 22px;
    padding: 8px 18px;
    letter-spacing: 3px;
  }

  .main-contact ul {
    gap: 10px;
  }

  .main-contact li {
    margin: 0;
  }

  .scroll-icon {
    width: 36px;
    height: 36px;
  }

  .contact-icon {
    width: 40px;
    height: 40px;
  }

  .main-job {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  .about-me,
  .my-skill,
  .my-blog,
  .my-contacts {
    padding: 28px 6%;
  }

  .contact-card {
    padding: 16px;
  }

  .contact-icon-wrap {
    width: 46px;
    height: 46px;
  }

  .contact-value {
    font-size: 0.95rem;
  }

  .section-kicker {
    letter-spacing: 3px;
    font-size: 0.75rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .timeline-list {
    padding-left: 22px;
  }

  .timeline-dot {
    width: 12px;
    height: 12px;
    left: 6px;
  }

  .timeline-card {
    padding: 16px;
  }

  .timeline-meta {
    font-size: 0.85rem;
  }

  .my-skill-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .my-introduction {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: rgb(228, 228, 228);
  font-size: 1.3rem;
  font-weight: 400;
  width: 35%;
}

.my-introduction h5 {
  margin: 0 0 8px;
}

.hardSkills,
  .bonusSkills {
    font-size: 18px;
  }

  .skill-item .skill-name {
    font-size: 0.9rem;
  }

  .my-skill-grid .skill-icon {
    width: 40px;
    height: 40px;
  }
  .my-introduction {
    width: 100%;
    font-size: 0.9rem;
  }

}
</style>





















