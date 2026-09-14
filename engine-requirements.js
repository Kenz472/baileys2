const major = parseInt(
    process.versions.node.split('.')[0],
    10
);

if (major < 20) {
    console.error(
        `\n❌ Paket ini membutuhkan Node.js versi 20+ agar berjalan dengan stabil.\n` +
        ` Versi Node.js kamu: ${process.versions.node}.\n` +
        ` Silakan upgrade ke Node.js 20+ untuk melanjutkan.\n`
    );
    process.exit(1);
}