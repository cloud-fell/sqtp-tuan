// 团队成员数据 (基于文档)
const teamMembers = [
    { name: "钱招鸿", role: "项目负责人", dept: "蓝田学园", task: "统筹规划" },
    { name: "夏嘉俊", role: "核心成员", dept: "云峰学园", task: "制定心理维度表" },
    { name: "李思哲", role: "核心成员", dept: "蓝田学园", task: "测评图产出" },
    { name: "符懿晨", role: "核心成员", dept: "蓝田学园", task: "思路构想" },
    { name: "刘畅", role: "核心成员", dept: "竺可桢学院", task: "物理空间测量" },
    { name: "程立冬", role: "核心成员", dept: "蓝田学园", task: "测评文案撰写" },
    { name: "林杰豪", role: "核心成员", dept: "蓝田学园", task: "标准化问卷" },
    { name: "姚亦辰", role: "核心成员", dept: "蓝田学园", task: "照片收集" },
    { name: "蔡易希", role: "核心成员", dept: "丹青学园", task: "踩点排期" },
    { name: "余健华", role: "核心成员", dept: "蓝田学园", task: "四觉记录" }
];


// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 渲染团队成员
    const teamGrid = document.getElementById('teamGrid');
    teamMembers.forEach(member => {
        const memberEl = document.createElement('div');
        memberEl.className = 'team-member';
        memberEl.innerHTML = `
            <div class="member-img">📷 ${member.name}</div>
            <div class="member-info">
                <h4>${member.name}</h4>
                <p><strong>学院：</strong>${member.dept}</p>
                <p><strong>职责：</strong>${member.task}</p>
            </div>
        `;
        teamGrid.appendChild(memberEl);
    });

    // 2. 渲染考察场所列表
    const venueList = document.getElementById('venueList');
    venues.forEach(venue => {
        const li = document.createElement('li');
        li.style.padding = '0.5rem 0';
        li.style.borderBottom = '1px solid #eee';
        li.textContent = venue;
        venueList.appendChild(li);
    });

   

    // 监听滚动
    window.addEventListener('scroll', checkTimeline);
    // 页面加载时检查一次
    checkTimeline();
});

