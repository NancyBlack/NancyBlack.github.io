// comments.js

// 定义全局变量
let comments = []; // 存储评论的数组
let currentPage = 1; // 当前页码
const commentsPerPage = 5; // 每页显示的评论数

const commentsApiUrl = 'https://dxji4n01.api.lncldglobal.com/1.1/classes/comments';
const uploadApiUrl = 'https://dxji4n01.api.lncldglobal.com/1.1/files';

// 初始化函数
function init() {
    loadComments(); // 加载评论
    renderPagination(); // 渲染分页
}


// 加载评论
async function loadComments() {
    // 从LeanCloud获取评论数据（假设API接口已实现）
    const response = await fetch(commentsApiUrl, {
      method: 'GET',
      headers: {
          'X-LC-Id': 'DxJI4n01cNU9I6UnVXMQFFz5-MdYXbMMI',         // 替换为你的 App ID
          'X-LC-Key': 'Dc4v6z9UKRZhfGyTeXRMoeIm',       // 替换为你的 App Key
          'Content-Type': 'application/json' // 如果需要
      }
    });
    if (!response.ok) {
      console.error('Failed to load comments:', await response.json());
      return; // 返回错误
    }
    comments = await response.json();
    renderComments(); // 渲染评论
}

// 渲染评论
function renderComments() {
  const commentSection = document.getElementById('comment-section');
  commentSection.innerHTML = ''; // 清空现有评论

  // 如果没有评论，显示提示信息
  if (comments.length === 0) {
    commentSection.innerHTML = '<p>当前没有评论</p>';
    document.getElementById('pagination-container').style.display = 'none'; // 隐藏分页
    return; // 退出函数
  } else {
    document.getElementById('pagination-container').style.display = 'flex'; // 显示分页
  }

  // 计算当前页的评论
  const startIndex = (currentPage - 1) * commentsPerPage;
  const endIndex = Math.min(comments.length, startIndex + commentsPerPage);
  
  console.log('here'); 
  for (let i = startIndex; i < endIndex; i++) {
    console.log('here:'+i); 
    const comment = comments[i];
    console.log('Rendering comment:', comment); 
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-item';
    commentDiv.innerHTML = `
        <p>${comment.content}</p>
        <small>${comment.username ? comment.username : '匿名'} - ${new Date(comment.createdAt).toLocaleString()}</small>
        <button onclick="likeComment(${comment.id})">点赞</button>
        <button onclick="editComment(${comment.id})">编辑</button>
        <button onclick="deleteComment(${comment.id})">删除</button>
        <div class="replies"></div>
    `;
    commentSection.appendChild(commentDiv);
  }
}

// 渲染分页
function renderPagination() {
    const pageNumbers = document.getElementById('page-numbers');
    pageNumbers.innerHTML = ''; // 清空现有页码

    const totalPages = Math.ceil(comments.length / commentsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const pageNum = document.createElement('span');
        pageNum.className = 'page-number' + (i === currentPage ? ' active' : '');
        pageNum.innerText = i;
        pageNum.onclick = () => {
            currentPage = i; // 更新当前页码
            renderComments(); // 重新渲染评论
            renderPagination(); // 更新分页
        };
        pageNumbers.appendChild(pageNum);
    }
}

// 提交评论
async function postComment() {
    const commentInput = document.getElementById('comment-input');
    const usernameInput = document.getElementById('username-input');
    const imageInput = document.getElementById('image-input');

    // 创建评论对象
    const newComment = {
        content: commentInput.value,
        username: usernameInput.value || '匿名',
        imageUrl: await uploadImage(imageInput.files[0]), // 上传图片并获取URL
        createdAt: new Date()
    };

    // 发送到LeanCloud（假设API接口已实现）
    await fetch(commentsApiUrl, {
        method: 'POST',
        headers: {
          'X-LC-Id': 'DxJI4n01cNU9I6UnVXMQFFz5-MdYXbMMI',         // 替换为你的 App ID
          'X-LC-Key': 'Dc4v6z9UKRZhfGyTeXRMoeIm',  
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
    });

    // 清空输入框
    commentInput.value = '';
    usernameInput.value = '';
    imageInput.value = '';
    
    // 重新加载评论
    loadComments();
}

// 上传图片
async function uploadImage(file) {
    if (!file) return null; // 如果没有文件，返回null

    // 使用LeanCloud的API上传图片
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(uploadApiUrl, { // 替换为你的图片上传API URL
        method: 'POST',
        body: formData
    });

    const data = await response.json();
    return data.url; // 返回图片URL
}

// 分页控制函数
function nextPage() {
    const totalPages = Math.ceil(comments.length / commentsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderComments();
        renderPagination();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderComments();
        renderPagination();
    }
}

// 初始化
init();