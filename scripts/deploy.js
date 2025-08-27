const hre = require('hardhat');

async function main() {
    const MiContrato = await hre.ethers.getContractFactory('MiContrato');
    const contrato = await MiContrato.deploy('Eureka');

    await contrato.waitForDeployment();

    console.log(`Contrato desplegado en: ${contrato.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});