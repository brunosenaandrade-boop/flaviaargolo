$filePath = "C:\Users\Outlier\Documents\SITE FLAVIA ARGOLO\dra-flavia-argolo\app\page.tsx"
$content = Get-Content $filePath -Raw

# Correção 1: Erro de digitação no hero
$content = $content -replace 'acolhede acolhe, enteme, entende e resolve', 'acolhe, entende e resolve'

# Correção 2: Card 3 - trocar "Famílias Ajudadas" por "Acolhimento"
# Vou procurar especificamente o terceiro card com Shield
$pattern = '(<Shield className="w-8 h-8 text-primary"[^>]*/>[\s\S]*?<div className="text-5xl font-black text-primary mb-3">100%</div>[\s\S]*?<p className="text-lg font-bold text-slate-900">)Famílias Ajudadas(</p>)'
$replacement = '${1}Acolhimento${2}'
$content = $content -replace $pattern, $replacement

Set-Content $filePath -Value $content -NoNewline
Write-Host "Correções aplicadas com sucesso!"
