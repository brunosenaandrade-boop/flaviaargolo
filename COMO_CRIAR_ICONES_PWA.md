# Como criar ícones PWA

## Opção 1: Usar Favicon Atual
Se você tem um favicon, pode converter:

```bash
# Instalar sharp-cli
npm install -g sharp-cli

# Redimensionar
sharp -i public/favicon.ico -o public/icon-192.png resize 192 192
sharp -i public/favicon.ico -o public/icon-512.png resize 512 512
```

## Opção 2: Criar Online
1. Ir em https://favicon.io/favicon-generator/
2. Criar logo com "FA" (iniciais)
3. Download e colocar em /public/

## Opção 3: Remover do manifest (temporário)
Comentar a seção "icons" no manifest.json até ter os ícones prontos.
