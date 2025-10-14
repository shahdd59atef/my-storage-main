import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = memo(() => {
  const { id } = useParams();

  const blogData = {
    // Removed the entry titled "توثيق حسابات تويتر"
    2: {
      title: 'متجر بيع بوزارت للانستقرام',
      subtitle: 'بوزارت للبيع',
      bgColor: 'linear-gradient(45deg, #833AB4, #C13584, #E1306C)',
      icon: '📷',
      content: 'متجر بيع بوزارت انستقرام - أكبر متجر في الشرق الأوسط لبيع الحسابات المميزة بأسعار مناسبة. نوفر لك مجموعة كبيرة من الحسابات الموثقة والحسابات القديمة والحسابات ذات المتابعين الحقيقيين.',
      relatedPosts: [
        { id: 3, title: 'متجر بيع بوزارت تيك توك', subtitle: 'بوزارت للبيع', icon: '🎵', bgColor: '#000000' },
        { id: 4, title: 'متجر بيع بوزارت سناب شات', subtitle: 'بوزارت للبيع', icon: '👻', bgColor: '#FFFC00' }
      ]
    },
    3: {
      title: 'متجر بيع يوزرات تيك توك',
      subtitle: 'بوزارت للبيع',
      bgColor: '#000000',
      icon: '🎵',
      content: 'متجر بيع تيك توك - أكبر متجر لبيع حسابات تيك توك المميزة. نوفر حسابات موثقة وحسابات بمتابعين حقيقيين وحسابات قديمة لمساعدتك في النجاح على المنصة.',
      relatedPosts: [
        { id: 2, title: 'متجر بيع بوزارت للانستقرام', subtitle: 'بوزارت للبيع', icon: '📷', bgColor: 'linear-gradient(45deg, #833AB4, #C13584, #E1306C)' },
        { id: 5, title: 'متجر بيع بوزارت تويتر', subtitle: 'بوزارت للبيع', icon: '🐦', bgColor: '#1DA1F2' }
      ]
    }
  };

  const defaultPost = {
    title: '',
    subtitle: '',
    bgColor: '#000000',
    icon: '',
    content: '',
    relatedPosts: []
  };
  const post = blogData[id] || defaultPost;

  return (
    <div className="blog-post">
      <div className="blog-post__container">
        {/* Content Section */}
        <div className="blog-post__content-wrapper">
          {/* Sidebar */}
          <aside className="blog-post__sidebar">
            <h3 className="blog-post__sidebar-title">مقالات ذات صلة</h3>
            {/* Stacked info blocks right under the related title */}
            <div className="blog-post__blocks">
              <div className="blog-post__block">
                <img src="https://cdn.salla.sa/DQYwE/JIYTGyNS30dMaCv8XYKNE4p8Wo9O38RciqQG9ROY.jpg" alt="خدمة 1" className="blog-post__block-image" />
                <div className="blog-post__block-content">
                  <h4 className="blog-post__block-title">تعزيز الوعي بالعلامة</h4>
                </div>
              </div>

              <div className="blog-post__block">
                <img src="https://cdn.salla.sa/DQYwE/0JgkI3kggmoeMDC5ORy9RYAzipZC0VVpr7F5WKy2.jpg" alt="خدمة 2" className="blog-post__block-image" />
                <div className="blog-post__block-content">
                  <h4 className="blog-post__block-title">نمو التفاعل والمبيعات</h4>
                </div>
              </div>

              <div className="blog-post__block">
                <img src="https://cdn.salla.sa/DQYwE/0JgkI3kggmoeMDC5ORy9RYAzipZC0VVpr7F5WKy2.jpg" alt="خدمة 3" className="blog-post__block-image" />
                <div className="blog-post__block-content">
                  <h4 className="blog-post__block-title">حلول مُخصصة لاحتياجاتك</h4>
                </div>
              </div>
            </div>
            <div className="blog-post__related">
              {(post.relatedPosts || []).map((relatedPost) => (
                <a 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.id}`}
                  className="blog-post__related-item"
                >
                  <div 
                    className="blog-post__related-image"
                    style={{ background: relatedPost.bgColor }}
                  >
                    <div className="blog-post__related-logo">
                      <span className="blog-post__related-logo-letter">e</span>
                    </div>
                    <div className="blog-post__related-icon">{relatedPost.icon}</div>
                  </div>
                  <div className="blog-post__related-content">
                    <h4 className="blog-post__related-title">
                      متجر بيع<br />
                      {relatedPost.title.split(' ').slice(-2).join(' ')}
                    </h4>
                    <p className="blog-post__related-subtitle">{relatedPost.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>
          </aside>

          <div className="blog-post__main">
            <h2 className="blog-post__title">{post.title}</h2>

            {/* Small Hero Banner - replaced black block with image */}
            <div className="blog-post__banner">
              <div className="blog-post__banner-image">
                <img 
                  src="https://cdn.salla.sa/DQYwE/raQ1rYI5nScXqOeZYufF1MOBEXNdxbvZZAsapUPU.jpg" 
                  alt="تيك توك" 
                  style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                />
              </div>
            </div>

            <div className="blog-post__intro">
              <h3 className="blog-post__intro-title">المقدمة</h3>
              <p className="blog-post__text">{post.content}</p>
            </div>

            {/* TikTok Section */}
            <div style={{ marginTop: '2rem' }}>
              <div className="blog-post__content">
                <p className="blog-post__text">
                  تعد منصة تيك توك أحد أشهر وأكثر منصات التواصل الاجتماعي استخداماً في الوقت الحالي، حيث يمكن للمستخدمين نشر ومشاركة مقاطع الفيديو القصيرة والتفاعل مع المحتوى الذي يتم نشره. وبالتالي، يمكن للعلامات التجارية الاستفادة من هذه المنصة لزيادة الوعي بالعلامة التجارية والتفاعل مع الجمهور.
                </p>
                
                <p className="blog-post__text">
                  ومن هذا المنطلق، يوفر لك متجر عز خدمات بيع حسابات تيك توك، وهي عبارة عن حسابات تحتوي على عدد كبير من المتابعين والمشاهدات والإعجابات، والتي يمكن استخدامها في إطار التسويق الإلكتروني للعلامة التجارية.
                </p>
                
                <p className="blog-post__text">
                  كما يجب على المستخدمين الإلمام بالضوابط الخاصة بمنصة تيك توك وعدم اللجوء إلى الأساليب المخالفة لهذه الضوابط، والتي من شأنها أن تؤدي إلى حظر الحسابات وخسارة المتابعين والتفاعل.
                </p>
                
                <p className="blog-post__text">
                  عند اختيار متجر لشراء حسابات تيك توك، يجب على المستخدمين البحث عن المتاجر الموثوقة والتي تتوفر فيها الجودة والمصداقية والاحترافية في الخدمات المقدمة. ويمكن للمستخدمين التحقق من ذلك من خلال قراءة تقييمات المستخدمين الآخرين للمتجر.
                </p>
                
                <p className="blog-post__text">
                  كما يمكن للمستخدمين تحديد الأهداف التسويقية والاحتياجات المناسبة لهم والتي يمكن تحقيقها من خلال شراء حسابات تيك توك، مثل زيادة عدد المتابعين والإعجابات والمشاهدات وتعزيز التفاعل والوعي بالعلامة التجارية.
                </p>
                
                <p className="blog-post__text">
                  وبالنسبة للعلامات التجارية، يمكن أن تستفيد من شراء حسابات تيك توك لتحقيق الأهداف التسويقية والتي تشمل زيادة الوعي بالعلامة التجارية وزيادة المبيعات وتعزيز الحضور الرقمي.
                </p>
                
                <p className="blog-post__text">
                  وأخيراً، يجب على المستخدمين توخي الحذر والتأكد من المصداقية والجودة قبل الشراء، وتحديد الأهداف والاحتياجات المناسبة لهم قبل الشراء، والالتزام بالضوابط والقواعد المتعلقة بمنصة تيك توك لتحقيق النجاح في استخدام الحسابات المشتراة يمكن للعلامات التجارية الاستفادة من هذه الحسابات العالية الجودة لتحقيق الأهداف التسويقية وتعزيز الحضور الرقمي للعلامة التجارية.
                </p>
                
                <p className="blog-post__text">
                  يجب على المستخدمين البحث والتحقق جيداً قبل شراء حسابات تيك توك من متاجر البيع. وعلى الرغم من أن شراء حسابات تيك توك يمكن أن يكون استثماراً جيداً للعلامات التجارية والأفراد، إلا أنه يجب على المستخدمين الالتزام بالضوابط والقواعد المتعلقة بالمنصة والعمل على تحقيق الأهداف التسويقية المحددة.
                </p>
                
                <p className="blog-post__text">
                  وفي النهاية، فإن شراء حسابات تيك توك يمكن أن يكون خياراً جيداً للمستخدمين الذين يرغبون في تحقيق النجاح والازدهار في منصة تيك توك. وعند اختيار المتجر المناسب، وتحديد الأهداف والاحتياجات المناسبة، والالتزام بالضوابط والقواعد، يمكن تحقيق النجاح والنمو في عالم تيك توك.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});

BlogPost.displayName = 'BlogPost';

export default BlogPost;

