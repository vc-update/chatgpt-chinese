<script setup>
// 9个卡片的数据 — 标题植入核心关键词
const features = [
  {
    title: "什么是ChatGPT？",
    icon: "🧠",
    desc: [
      { icon: "🔍", text: "由OpenAI开发的全球最强AI大模型，ChatGPT官网已服务数亿用户" },
      { icon: "💡", text: "通过海量数据训练，能理解和生成自然语言，中文对话流畅自然" },
      { icon: "🌐", text: "ChatGPT网页版支持100+语言，是跨语言交流的首选AI工具" }
    ],
    image: "https://images.unsplash.com/photo-1675557010061-315772f6efef?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "ChatGPT官网最新模型",
    icon: "⚙️",
    desc: [
      { icon: "🔥", text: "GPT-5.4：ChatGPT官网2026最新旗舰模型，推理能力大幅跃升" },
      { icon: "🚀", text: "GPT-4o：优化的多模态模型，支持图像理解和语音对话" },
      { icon: "✨", text: "Claude 4.6 / Gemini 3.1 Pro：ChatGPT中文版同步支持" }
    ],
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "ChatGPT网页版商业应用",
    icon: "💼",
    desc: [
      { icon: "📊", text: "智能客服：用ChatGPT网页版搭建7x24小时自动应答系统" },
      { icon: "📝", text: "内容创作：公众号文案、营销文案、创意构思一键生成" },
      { icon: "💻", text: "编程辅助：代码生成、调试、技术文档编写" }
    ],
    image: "https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "ChatGPT中文版教育应用",
    icon: "🎓",
    desc: [
      { icon: "📚", text: "AI学习助手：用ChatGPT网页版解答数学、物理、编程等问题" },
      { icon: "✏️", text: "论文写作辅导：学术润色、语法纠正、文献综述生成" },
      { icon: "🧩", text: "个性化教育：根据学习水平定制化训练材料" }
    ],
    image: "https://images.unsplash.com/photo-1678483789107-0029c61fdcca?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "ChatGPT技术原理",
    icon: "🛠️",
    desc: [
      { icon: "🧮", text: "基于Transformer架构，采用自注意力机制处理长文本" },
      { icon: "📊", text: "通过预训练+微调两阶段训练，ChatGPT掌握海量知识" },
      { icon: "🔄", text: "使用RLHF人类反馈强化学习，让回答更准确有用" }
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "ChatGPT官网Plus会员",
    icon: "🚀",
    desc: [
      { icon: "⚡", text: "优先访问：ChatGPT官网高峰时段不排队" },
      { icon: "🔍", text: "最新模型：第一时间在ChatGPT网页版体验GPT-5.4" },
      { icon: "🔌", text: "插件生态：联网搜索、数据分析等1000+插件" }
    ],
    image: "https://images.unsplash.com/photo-1679403766682-3b31efa571a8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "ChatGPT未来发展趋势",
    icon: "🔮",
    desc: [
      { icon: "🧠", text: "多模态能力：ChatGPT网页版可理解文本、图像、音频、视频" },
      { icon: "🌐", text: "实时联网：ChatGPT官网已支持实时获取最新信息" },
      { icon: "🤝", text: "个性化交互：根据用户习惯自动调整回答风格" }
    ],
    image: "https://images.unsplash.com/photo-1620266757065-5814239881fd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "ChatGPT使用注意事项",
    icon: "⚠️",
    desc: [
      { icon: "📅", text: "知识截止：ChatGPT模型训练数据有时间限制，需开启联网" },
      { icon: "❓", text: "幻觉问题：AI可能生成看似合理但不准确的内容，需验证" },
      { icon: "🔒", text: "隐私保护：避免在ChatGPT网页版输入敏感个人信息" }
    ],
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "ChatGPT官网API开发",
    icon: "🔗",
    desc: [
      { icon: "💻", text: "ChatGPT官网开放API接口，集成到自己的应用和产品" },
      { icon: "💰", text: "按量计费：灵活的Token计费模式，中小企业友好" },
      { icon: "🔒", text: "企业级安全：SOC 2认证，数据加密保护" }
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
  }
];
</script>

<template>
  <div class="home-container">
    
    <div class="global-mesh-bg">
      <div class="mesh-blob blob-1"></div>
      <div class="mesh-blob blob-2"></div>
      <div class="mesh-blob blob-3"></div>
      <div class="mesh-overlay"></div> </div>

    <div class="content-wrapper">
      
      <div class="hero-card">
        <div class="hero-content">
          <h1 class="main-title">
            ChatGPT官网中文版
            <div class="animated-text-wrapper">
              <div class="animated-text">
                <span>ChatGPT网页版在线对话</span>
                <span>AI 随心绘画</span>
                <span>AI 高效写作</span>
                <span>自动生成PPT</span>
                <span>AI 帮你读文件</span>
                <span>专业级翻译</span>
                <span>400+ AI 助手</span>
                <span>AI 学术插件</span>
                <span>ChatGPT网页版在线对话</span>
              </div>
            </div>
          </h1>
          <p class="sub-text">
            ChatGPT官网中文版入口，国内免翻墙直接使用ChatGPT网页版。<br>
            支持GPT-5.4最新模型，邮箱注册即可畅享全球顶级AI能力。
          </p>
          
          <div class="actions">
            <a href="https://www.snakegpt.vip/" class="btn primary">ChatGPT网页版入口 →</a>
            <a href="https://gptcat.cc/" class="btn secondary">ChatGPT官网镜像 →</a>
          </div>
        </div>
      </div>

      <div class="section-header">
        <h2 class="section-title">
          <span class="gradient-text-blue">ChatGPT官网</span>
          <span class="separator">|</span>
          <span class="gradient-text-purple">ChatGPT网页版</span>
          <span class="separator">|</span>
          <span class="gradient-text-pink">ChatGPT中文版</span>
        </h2>
        <p class="section-sub">
          探索ChatGPT官网全部功能，了解ChatGPT网页版的技术原理与应用场景，全球最强 AI 如何为您服务
        </p>
      </div>

      <div class="features-grid">
        <div 
          v-for="(item, index) in features" 
          :key="index"
          class="feature-card" 
          :class="{ reverse: index % 2 !== 0 }"
        >
          <div class="text-content">
            <div class="card-header">
              <span class="title-icon">{{ item.icon }}</span>
              <h3>{{ item.title }}</h3>
            </div>
            <ul>
              <li v-for="(line, i) in item.desc" :key="i">
                <span class="li-icon">{{ line.icon }}</span>
                <span>{{ line.text }}</span>
              </li>
            </ul>
          </div>
          <div class="image-content">
            <img :src="item.image" :alt="item.title" loading="lazy">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* --- 布局容器 --- */
.home-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* 强制溢出隐藏，防止背景光斑撑开滚动条 */
  overflow-x: hidden; 
}

.content-wrapper {
  position: relative;
  z-index: 10; /* 确保内容在背景之上 */
  max-width: 1152px;
  margin: 0 auto;
  padding: 60px 24px 100px;
}

/* --- 1. 全局流光背景 (Mesh Gradient) --- */
.global-mesh-bg {
  position: absolute;
  top: 0; left: 0; right: 0; 
  height: 100%; /* 背景延伸到底部 */
  z-index: 0;
  background-color: #f8fafc; /* 浅灰底色 */
  overflow: hidden;
  pointer-events: none;
}
/* 暗黑模式适配 */
:root.dark .global-mesh-bg {
  background-color: #0f172a;
}

.mesh-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: blob-float 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
}

/* 左上角青色光斑 */
.blob-1 {
  width: 600px; height: 600px;
  background: #a7f3d0; /* 青色 */
  top: -200px; left: -200px;
}
:root.dark .blob-1 { background: #059669; opacity: 0.3; }

/* 右上角粉紫色光斑 */
.blob-2 {
  width: 500px; height: 500px;
  background: #fbcfe8; /* 粉色 */
  top: -100px; right: -100px;
  animation-delay: -5s;
}
:root.dark .blob-2 { background: #db2777; opacity: 0.2; }

/* 中间下方的蓝色光斑 */
.blob-3 {
  width: 600px; height: 600px;
  background: #bfdbfe; /* 浅蓝 */
  top: 40%; left: 50%;
  transform: translateX(-50%);
  opacity: 0.4;
}
:root.dark .blob-3 { background: #2563eb; opacity: 0.2; }

/* 磨砂层，让颜色融合更自然 */
.mesh-overlay {
  position: absolute;
  inset: 0;
  backdrop-filter: blur(60px); /* 关键：强力模糊让光斑变成渐变 */
}

@keyframes blob-float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(20px, -20px) scale(1.1); }
}


/* --- 2. Hero 悬浮白卡片 --- */
.hero-card {
  position: relative;
  background: rgba(255, 255, 255, 0.9); /* 轻微透明的白色 */
  border-radius: 32px;
  padding: 80px 40px;
  text-align: center;
  box-shadow: 0 20px 60px -12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255,255,255, 0.8);
  margin-bottom: 80px; /* 与下方拉开距离 */
  backdrop-filter: blur(10px);
}
:root.dark .hero-card {
  background: rgba(30, 41, 59, 0.8);
  border-color: rgba(255,255,255,0.1);
}

.main-title {
  font-size: 52px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 30px;
  color: #1e293b;
  letter-spacing: -1px;
}
:root.dark .main-title { color: #f1f5f9; }

/* 动画文字修正 */
.animated-text-wrapper { height: 70px; overflow: hidden; display: block; margin-top: 10px; }
.animated-text span { 
  display: block; height: 70px; line-height: 70px; 
  font-size: 52px; 
  /* 渐变色文字 */
  background: -webkit-linear-gradient(120deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* 9个词的轮播动画 */
.animated-text { animation: scrollText 18s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55); }
@keyframes scrollText { 0%, 10% { transform: translateY(0); } 11%, 21% { transform: translateY(-70px); } 22%, 32% { transform: translateY(-140px); } 33%, 43% { transform: translateY(-210px); } 44%, 54% { transform: translateY(-280px); } 55%, 65% { transform: translateY(-350px); } 66%, 76% { transform: translateY(-420px); } 77%, 87% { transform: translateY(-490px); } 88%, 98% { transform: translateY(-560px); } 100% { transform: translateY(0); } }

.sub-text { font-size: 20px; color: #64748b; margin-bottom: 40px; line-height: 1.6; }
:root.dark .sub-text { color: #94a3b8; }

.actions { display: flex; gap: 20px; justify-content: center; }
.btn { padding: 14px 36px; border-radius: 50px; font-weight: 600; text-decoration: none !important; transition: transform 0.2s, box-shadow 0.2s; font-size: 16px; }
/* 左边青色按钮 */
.btn.primary { 
  background: linear-gradient(135deg, #10b981, #059669); 
  color: white; 
  box-shadow: 0 10px 20px -5px rgba(16, 185, 129, 0.4);
}
/* 右边粉色按钮 (呼应背景) */
.btn.secondary { 
  background: linear-gradient(135deg, #fce7f3, #fbcfe8); 
  color: #db2777; 
  border: 1px solid rgba(255,255,255,0.5);
}
:root.dark .btn.secondary { background: #334155; color: white; border-color: #475569; }

.btn:hover { transform: translateY(-3px); box-shadow: 0 15px 30px -5px rgba(0,0,0,0.1); }


/* --- 3. 中间标题栏 --- */
.section-header { text-align: center; margin-bottom: 60px; position: relative; }
.section-title { font-size: 36px; font-weight: 800; margin-bottom: 16px; border: none; }

/* 标题渐变色 */
.gradient-text-blue { background: linear-gradient(to right, #3b82f6, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.gradient-text-purple { background: linear-gradient(to right, #8b5cf6, #d946ef); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.gradient-text-pink { background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

.separator { margin: 0 15px; color: #cbd5e1; font-weight: 300; }
.section-sub { font-size: 18px; color: #64748b; max-width: 700px; margin: 0 auto; }


/* --- 4. 功能卡片网格 --- */
.features-grid { display: flex; flex-direction: column; gap: 40px; }

.feature-card {
  display: flex; align-items: center; gap: 50px;
  background: rgba(255, 255, 255, 0.8); /* 略透明 */
  padding: 40px; 
  border-radius: 24px;
  /* 玻璃拟态边框 */
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
}
:root.dark .feature-card { background: rgba(30, 41, 59, 0.6); border-color: rgba(255,255,255,0.05); }

.feature-card:hover { 
  transform: translateY(-5px) scale(1.01); 
  background: white;
  box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.1); 
}
:root.dark .feature-card:hover { background: #1e293b; }

.feature-card.reverse { flex-direction: row-reverse; }

/* 文本和图片样式 */
.text-content { flex: 1; }
.card-header { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
.title-icon { font-size: 36px; background: #f1f5f9; width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; border-radius: 16px; }
:root.dark .title-icon { background: #334155; }
.text-content h3 { font-size: 26px; font-weight: 700; margin: 0; border: none; color: #1e293b; }
:root.dark .text-content h3 { color: #f1f5f9; }

.text-content li { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; font-size: 16px; color: #475569; }
:root.dark .text-content li { color: #cbd5e1; }
/* --- 图片容器修正 --- */
.image-content {
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  /* 【核心修正 1】强制设定宽高比例 (4:3 是最通用的卡片比例) */
  aspect-ratio: 4 / 3;
  /* 或者是 height: 300px; 如果你想定死高度 */
  
  /* 消除图片底部的微小空隙 */
  display: flex; 
}

.image-content img {
  width: 100%;
  
  /* 【核心修正 2】强制填满容器高度 */
  height: 100%;
  
  /* 【核心修正 3】智能裁剪：保证图片铺满且不变形 (类似手机壁纸模式) */
  object-fit: cover; 
  object-position: center; /* 居中裁剪 */
  
  display: block;
  transition: transform 0.6s;
}

/* 鼠标悬停时的放大效果保持不变 */
.feature-card:hover .image-content img {
  transform: scale(1.05);
}


/* --- 移动端适配 --- */
@media (max-width: 768px) {
  .hero-card { padding: 40px 24px; border-radius: 24px; }
  .main-title, .animated-text span { font-size: 32px; height: 40px; line-height: 40px; }
  .animated-text-wrapper { height: 40px; }
  /* 移动端动画高度修正 */
  @keyframes scrollText { 0%, 10% { transform: translateY(0); } 11%, 21% { transform: translateY(-40px); } /* ...中间省略... */ 100% { transform: translateY(0); } }
  
  .feature-card, .feature-card.reverse { flex-direction: column; gap: 24px; padding: 24px; }
  .title-icon { width: 48px; height: 48px; font-size: 24px; }
  .image-content { width: 100%; }
}
</style>