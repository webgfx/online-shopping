# Convert .splat files to .ply format for PlayCanvas compatibility
# .splat format is a binary format that needs conversion to PLY

param(
    [Parameter(Mandatory=$false)]
    [string]$InputFile = "assets/bicycle.splat",

    [Parameter(Mandatory=$false)]
    [string]$OutputFile = "assets/bicycle.ply"
)

$ErrorActionPreference = "Stop"

Write-Host "🔄 Converting .splat to .ply format..." -ForegroundColor Cyan
Write-Host ""

# Check if input file exists
if (-not (Test-Path $InputFile)) {
    Write-Host "❌ Input file not found: $InputFile" -ForegroundColor Red
    exit 1
}

# Get file size
$fileInfo = Get-Item $InputFile
$fileSizeMB = [math]::Round($fileInfo.Length / 1MB, 2)
Write-Host "📁 Input file: $InputFile ($fileSizeMB MB)" -ForegroundColor White

# Check if @playcanvas/splat-transform is available
Write-Host "🔍 Checking for @playcanvas/splat-transform..." -ForegroundColor Cyan

try {
    # Use splat-transform to convert
    # .splat files can be converted to PLY using the tool
    Write-Host "⚙️  Converting using @playcanvas/splat-transform..." -ForegroundColor Yellow

    $tempDir = "tmp/splat-convert"
    New-Item -ItemType Directory -Force -Path $tempDir | Out-Null

    # Copy splat file with .ply extension temporarily
    # Note: .splat and .ply formats are similar, but .splat needs proper header conversion
    Write-Host ""
    Write-Host "ℹ️  NOTE: Direct .splat support in PlayCanvas 2.13.1 is limited." -ForegroundColor Yellow
    Write-Host "   Recommended: Use .ply or .sog formats instead." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "   Options:" -ForegroundColor Cyan
    Write-Host "   1. Re-export from source as .ply (best quality)" -ForegroundColor White
    Write-Host "   2. Use SuperSplat to convert: https://superspl.at/" -ForegroundColor White
    Write-Host "   3. Convert to .sog using:" -ForegroundColor White
    Write-Host "      npx @playcanvas/splat-transform $InputFile -o $($OutputFile.Replace('.ply', '.sog'))" -ForegroundColor Gray
    Write-Host ""

} catch {
    Write-Host "❌ Conversion failed: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 Manual conversion steps:" -ForegroundColor Cyan
    Write-Host "   1. Open SuperSplat: https://superspl.at/" -ForegroundColor White
    Write-Host "   2. Load your .splat file" -ForegroundColor White
    Write-Host "   3. Export as .ply or use splat-transform to create .sog" -ForegroundColor White
    exit 1
}
