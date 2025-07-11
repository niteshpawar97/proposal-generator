
import './App.css';
import React, { useState } from 'react';
import { Download, FileText, Zap, Star, CheckCircle, Phone, Mail, Building, User, Calendar } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const ProposalGenerator = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientCompany: '',
    clientBusiness: '',
    yourName: 'Nitesh Kadve',
    yourCompany: 'Niket Group',
    yourPhone: '8821861409',
    yourEmail: '',
    projectTitle: '',
    problemStatement: '',
    projectType: 'website',
    features: [],
    timeline: '4-6',
    budget: '50000',
    maintenance: '5000',
    discount: '10',
    meetingDate: '',
    additionalNotes: ''
  });

  const [previewHTML, setPreviewHTML] = useState('');
  const [showPreview, setShowPreview] = useState(false);


  // const [formData, setFormData] = useState({
  //   clientName: 'राहुल शर्मा',
  //   clientCompany: 'Sharma Electronics',
  //   clientBusiness: 'Retail Electronics Store',
  //   yourName: 'Nitesh Kadve',
  //   yourCompany: 'Niket Group',
  //   yourPhone: '8821861409',
  //   yourEmail: 'nitesh@niketgroup.in',
  //   projectTitle: 'शर्मा इलेक्ट्रॉनिक्स ऑनलाइन वेबसाइट',
  //   problemStatement: 'कंपनी का कोई ऑनलाइन presence नहीं है जिससे नए ग्राहक नहीं मिल पा रहे हैं और existing customers को updates नहीं मिलते।',
  //   projectType: 'website',
  //   features: [
  //   'Responsive Website Design',
  //   'SEO Optimization',
  //   'Contact Forms'
  // ],
  //   timeline: '4-6',
  //   budget: '45000',
  //   maintenance: '3000',
  //   discount: '15',
  //   meetingDate: '2025-07-12',
  //   additionalNotes: 'Client चाहता है WhatsApp integration और future में ecommerce add करने का विकल्प।'
  // });

  const [startWeek, endWeek] = formData.timeline.split('-').map(Number);

const downloadPDF = () => {
  const iframe = document.querySelector('iframe');
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  const element = iframeDoc.body;

  const opt = {
    margin:       0.3,
    filename:     `${formData.clientName || 'Client'}_Proposal.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
};

  const projectTypes = {
    website: {
      title: 'वेबसाइट डेवलपमेंट',
      features: [
        'Responsive Website Design',
        'Mobile-Friendly Interface',
        'SEO Optimization',
        'Contact Forms',
        'Admin Panel',
        'Analytics Integration',
        'Speed Optimization',
        'Security Features'
      ],
      benefits: [
        'Online presence बढ़ेगी',
        'Customers तक आसान पहुंच',
        'Professional brand image',
        '24/7 business showcase',
        'Lead generation increase',
        'Competitor से आगे रहेंगे'
      ]
    },
    ecommerce: {
      title: 'ई-कॉमर्स वेबसाइट',
      features: [
        'Product Catalog Management',
        'Shopping Cart & Checkout',
        'Payment Gateway Integration',
        'Order Management System',
        'Customer Account Dashboard',
        'Inventory Management',
        'Shipping Integration',
        'Sales Analytics'
      ],
      benefits: [
        'Online sales शुरू करें',
        'Wider customer reach',
        'Automated order processing',
        'Real-time inventory tracking',
        'Multiple payment options',
        'Customer retention tools'
      ]
    },
    app: {
      title: 'मोबाइल एप्लिकेशन',
      features: [
        'Native Android/iOS App',
        'User-friendly Interface',
        'Push Notifications',
        'Offline Functionality',
        'Cloud Sync',
        'Analytics Dashboard',
        'App Store Optimization',
        'Multi-language Support'
      ],
      benefits: [
        'Mobile-first approach',
        'Direct customer access',
        'Brand loyalty increase',
        'Real-time engagement',
        'Competitive advantage',
        'Revenue growth potential'
      ]
    },
    erp: {
      title: 'ERP/बिज़नेस मैनेजमेंट सिस्टम',
      features: [
        'Inventory Management',
        'Customer Relationship Management',
        'Billing & Invoicing',
        'Employee Management',
        'Financial Reporting',
        'Document Management',
        'Workflow Automation',
        'Data Analytics'
      ],
      benefits: [
        'Business processes streamline',
        'Paperwork reduce करें',
        'Real-time data access',
        'Improved efficiency',
        'Better decision making',
        'Cost reduction'
      ]
    },
    transport: {
      title: 'ट्रांसपोर्ट मैनेजमेंट सिस्टम',
      features: [
        'Vehicle Document Management',
        'GPS Tracking Integration',
        'Driver Management',
        'Trip Planning & Scheduling',
        'Billing & Invoice System',
        'Customer Portal',
        'Maintenance Reminders',
        'Fuel Management'
      ],
      benefits: [
        'Complete digital transformation',
        'Real-time vehicle tracking',
        'Automated documentation',
        'Improved customer service',
        'Cost optimization',
        'Business growth scalability'
      ]
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const generateHTML = () => {
    const selectedProject = projectTypes[formData.projectType];
    const selectedFeatures = formData.features.length > 0 ? formData.features : selectedProject.features;

    const proposalHTML = `
<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.projectTitle || selectedProject.title} - Proposal</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Noto Sans Devanagari', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="pattern" patternUnits="userSpaceOnUse" width="20" height="20"><rect width="20" height="20" fill="none"/><circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23pattern)"/></svg>') repeat;
            animation: float 20s infinite linear;
        }
        
        @keyframes float {
            0% { transform: translateX(-50px) translateY(-50px); }
            100% { transform: translateX(0px) translateY(0px); }
        }
        
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }
        
        .header p {
            font-size: 1.2em;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .section {
            margin-bottom: 40px;
        }
        
        .section h2 {
            color: #2c3e50;
            font-size: 1.8em;
            margin-bottom: 20px;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
            position: relative;
        }
        
        .section h2::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 50px;
            height: 3px;
            background: #e74c3c;
        }
        
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        
        .feature-card {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 25px;
            border-radius: 10px;
            border-left: 5px solid #3498db;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .feature-card h3 {
            color: #2c3e50;
            margin-bottom: 10px;
            font-size: 1.1em;
        }
        
        .benefits {
            background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            margin: 30px 0;
        }
        
        .benefits h3 {
            font-size: 1.5em;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .benefits ul {
            list-style: none;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;
        }
        
        .benefits li {
            margin-bottom: 10px;
            padding-left: 25px;
            position: relative;
        }
        
        .benefits li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #00b894;
            font-weight: bold;
            font-size: 1.2em;
        }
        
        .pricing {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
        }
        
        .pricing h3 {
            color: #2c3e50;
            font-size: 1.5em;
            margin-bottom: 20px;
        }
        
        .price-box {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            margin: 20px 0;
        }
        
        .contact-info {
            background: linear-gradient(135deg, #00b894 0%, #00a085 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            margin-top: 30px;
        }
        
        .contact-info h3 {
            font-size: 1.5em;
            margin-bottom: 20px;
        }
        
        .contact-details {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .contact-item strong {
            font-size: 1.1em;
        }
        
        .timeline {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 10px;
            margin: 30px 0;
        }
        
        .timeline h3 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
            font-size: 1.5em;
        }
        
        .timeline-item {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            padding: 15px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .timeline-number {
            background: #3498db;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 15px;
        }
        
        .problem-statement {
            background: linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            margin: 30px 0;
        }
        
        .problem-statement h3 {
            font-size: 1.5em;
            margin-bottom: 15px;
            text-align: center;
        }
        
        @media (max-width: 768px) {
            .container {
                margin: 10px;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .header h1 {
                font-size: 2em;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .features {
                grid-template-columns: 1fr;
            }
            
            .contact-details {
                flex-direction: column;
                gap: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 ${formData.clientCompany || formData.clientName}</h1>
            <p>${formData.projectTitle || selectedProject.title}</p>
        </div>
        
        <div class="content">
            <div class="section">
                <h2>🙏 नमस्कार ${formData.clientName} जी</h2>
                <p>आपके साथ हुई बातचीत के बाद, हमने ${formData.clientCompany || 'आपके business'} के लिए एक comprehensive digital solution तैयार किया है जो आपके business को modern और efficient बनाएगा।</p>
                ${formData.meetingDate ? `<p><strong>मीटिंग डेट:</strong> ${formData.meetingDate}</p>` : ''}
            </div>
            
            ${formData.problemStatement ? `
            <div class="problem-statement">
                <h3>🎯 समस्या का समाधान</h3>
                <p>${formData.problemStatement}</p>
            </div>
            ` : ''}
            
            <div class="section">
                <h2>💡 हमारा समाधान</h2>
                <div class="features">
                    ${selectedFeatures.map(feature => `
                        <div class="feature-card">
                            <h3>✨ ${feature}</h3>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="benefits">
                <h3>🎉 आपको मिलेगा:</h3>
                <ul>
                    ${selectedProject.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
            
            <div class="timeline">
  <h3>📅 Project Timeline</h3>
  <div class="timeline-item">
    <div class="timeline-number">1</div>
    <div>
      <strong>Week 1:</strong> Requirements analysis और system design
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-number">2</div>
    <div>
      <strong>Week 2–${startWeek + 1}:</strong> Development और core features
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-number">3</div>
    <div>
      <strong>Week ${startWeek + 2}–${endWeek}:</strong> Testing, deployment और training
    </div>
  </div>
</div>

            
            <div class="section">
                <div class="pricing">
                    <h3>💰 Investment</h3>
                    <div class="price-box">
                        <p><strong>Total Project Cost:</strong> ₹${parseInt(formData.budget).toLocaleString()}</p>
                        ${formData.maintenance !== '0' ? `<p><strong>Yearly Maintenance:</strong> ₹${parseInt(formData.maintenance).toLocaleString()}</p>` : ''}
                        <p><em>* Training, support और warranty included</em></p>
                    </div>
                    ${formData.discount !== '0' ? `<p><strong>🎁 Special Offer:</strong> अभी start करें और ${formData.discount}% discount पाएं!</p>` : ''}
                </div>
            </div>
            
            ${formData.additionalNotes ? `
            <div class="section">
                <h2>📝 Additional Notes</h2>
                <p>${formData.additionalNotes}</p>
            </div>
            ` : ''}
            
            <div class="contact-info">
                <h3>📞 Let's Connect</h3>
                <div class="contact-details">
                    <div class="contact-item">
                        <strong>👨‍💼 ${formData.yourName}</strong>
                    </div>
                    <div class="contact-item">
                        <strong>📱 ${formData.yourPhone}</strong>
                    </div>
                    <div class="contact-item">
                        <strong>🏢 ${formData.yourCompany}</strong>
                    </div>
                    ${formData.yourEmail ? `
                    <div class="contact-item">
                        <strong>📧 ${formData.yourEmail}</strong>
                    </div>
                    ` : ''}
                </div>
                <p style="margin-top: 20px; font-style: italic;">
                    "आपका business digital बनाना हमारी जिम्मेदारी है!"
                </p>
            </div>
        </div>
    </div>
</body>
</html>
    `;
    return proposalHTML;
  };

  const downloadProposal = () => {
    const html = generateHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.clientName || 'Client'}_Proposal.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const selectedProject = projectTypes[formData.projectType];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8" />
              <div>
                <h1 className="text-3xl font-bold">Universal Proposal Generator</h1>
                <p className="text-blue-100">किसी भी client के लिए instant professional proposal</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 space-y-6">
            {/* Client Information */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Client Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Client Name *</label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="श्री राम कुमार"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company/Business Name</label>
                  <input
                    type="text"
                    name="clientCompany"
                    value={formData.clientCompany}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ABC Industries"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Business Type</label>
                  <input
                    type="text"
                    name="clientBusiness"
                    value={formData.clientBusiness}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Manufacturing, Trading, Services, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Meeting Date (Optional)</label>
                  <input
                    type="date"
                    name="meetingDate"
                    value={formData.meetingDate}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Your Information */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Building className="w-5 h-5" />
                Your Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Company</label>
                  <input
                    type="text"
                    name="yourCompany"
                    value={formData.yourCompany}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="yourPhone"
                    value={formData.yourPhone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email (Optional)</label>
                  <input
                    type="email"
                    name="yourEmail"
                    value={formData.yourEmail}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Project Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="website">Website Development</option>
                    <option value="ecommerce">E-commerce Website</option>
                    <option value="app">Mobile Application</option>
                    <option value="erp">ERP/Business Management System</option>
                    <option value="transport">Transport Management System</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Custom Project Title (Optional)</label>
                  <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Leave blank to use default title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Problem Statement (Optional)</label>
                  <textarea
                    name="problemStatement"
                    value={formData.problemStatement}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Client की current problems और challenges..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Notes (Optional)</label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="कोई extra information या special requirements..."
                  />
                </div>
              </div>
            </div>

            {/* Features Selection */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Features (Optional - Leave blank for default)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedProject.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`feature-${index}`}
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor={`feature-${index}`} className="ml-2 text-sm">{feature}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & Timeline */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-500">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Pricing & Timeline
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Timeline (Weeks)</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="2-3">2-3 Weeks</option>
                    <option value="4-6">4-6 Weeks</option>
                    <option value="6-8">6-8 Weeks</option>
                    <option value="8-12">8-12 Weeks</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget (₹)</label>
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="उदाहरण: 50000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Yearly Maintenance (₹)</label>
                  <input
                    type="number"
                    name="maintenance"
                    value={formData.maintenance}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="उदाहरण: 5000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Discount (%)</label>
                  <input
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="उदाहरण: 10"
                  />
                </div>
              </div>
            </div>

            {/* Download Proposal Button */}
            <button
              onClick={() => {
                const html = generateHTML();
                setPreviewHTML(html);
                setShowPreview(true);
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Preview Proposal
            </button>


            {showPreview && (
             <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
  <div className="bg-white w-full max-w-6xl h-[95vh] rounded-xl shadow-2xl overflow-y-auto flex flex-col relative">

    {/* Top Buttons */}
    <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-100">
      <button
        className="text-red-600 text-2xl font-bold"
        onClick={() => setShowPreview(false)}
      >
        ×
      </button>

      <div className="flex gap-3">
        <button
          onClick={downloadProposal}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download HTML
        </button>
        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Download PDF
        </button>
      </div>
    </div>

    {/* Preview */}
    <div id="pdf-preview" className="flex-1 overflow-auto p-4">
      <iframe
        srcDoc={previewHTML}
        title="Proposal Preview"
        className="w-full h-full border rounded"
      ></iframe>
    </div>
  </div>
</div>

            )}




          </div>
        </div>
      </div>
    </div>


  );
};

export default ProposalGenerator;

