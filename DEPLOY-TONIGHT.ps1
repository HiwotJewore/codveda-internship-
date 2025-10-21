# 🚀 Deploy Codveda Internship - Complete Tonight!
# Run this script to open everything you need

Write-Host "🎯 CODVEDA INTERNSHIP DEPLOYMENT - TONIGHT!" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green

# Open GitHub in browser for repository creation
Write-Host "📁 Opening GitHub for repository creation..." -ForegroundColor Yellow
Start-Process "https://github.com/new"

# Open all HTML files to test before deployment
Write-Host "🌐 Opening all applications for testing..." -ForegroundColor Yellow
Start-Process "Level1-Task1-Landing-Page.html"
Start-Process "Level1-Task2-Interactive-Form.html" 
Start-Process "Level1-Task3-Counter-App.html"
Start-Process "Level2-Task2-API-Integration.html"
Start-Process "Level3-Task2-Performance-Optimization.html"

# Open documentation files
Write-Host "📋 Opening setup guides..." -ForegroundColor Yellow
Start-Process "README.md"
Start-Process "GITHUB-SETUP-GUIDE.md"
Start-Process "LINKEDIN-POST-TEMPLATE.md"

# Open LinkedIn for posting
Write-Host "📱 Opening LinkedIn for video posting..." -ForegroundColor Yellow
Start-Process "https://linkedin.com/feed"

Write-Host ""
Write-Host "✅ EVERYTHING IS READY!" -ForegroundColor Green
Write-Host "========================" -ForegroundColor Green
Write-Host "1. 📁 Create GitHub repo: codveda-internship" -ForegroundColor White
Write-Host "2. 📤 Upload all files from this folder" -ForegroundColor White
Write-Host "3. ⚙️  Enable GitHub Pages in Settings" -ForegroundColor White
Write-Host "4. 🎬 Record 1-2 minute video showing all apps" -ForegroundColor White
Write-Host "5. 📱 Post video on LinkedIn with template" -ForegroundColor White
Write-Host ""
Write-Host "🎯 You have 5/3 required tasks (167% completion)!" -ForegroundColor Green
Write-Host "🚀 All applications are production-ready!" -ForegroundColor Green
Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")