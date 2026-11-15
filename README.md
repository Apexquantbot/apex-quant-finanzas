# Apex Quant Finanzas

Una sola app con dos secciones: **💎 Pro** y **📈 Mercados**.

- Web / app: https://apexquantbot.github.io/apex-quant-finanzas/
- Abrir directamente en una sección: `…/apex-quant-finanzas/#pro` o `#mercados`

Esta app **no tiene bot propio**: solo junta las dos webs que ya existen.
Cada una sigue funcionando por su lado (sus datos, sus avisos y su cron):

| Sección | Repositorio | Web |
|---|---|---|
| Pro | Apexquantbot/apex-quant-pro | https://apexquantbot.github.io/apex-quant-pro/ |
| Mercados | Apexquantbot/bot-quant-mercados | https://apexquantbot.github.io/bot-quant-mercados/ |

Cualquier cambio que se haga en Pro o en Mercados aparece aquí solo, sin tocar nada.
Si algún día cambia la dirección de una de ellas (por ejemplo, al pasar Mercados a la organización Apexquantbot), se actualiza en `index.html` (bloque `APPS`).

Pro está en el mismo dominio que esta app (`apexquantbot.github.io`), así que comparte con ella la clave de Gemini, las acciones favoritas y las notificaciones.
