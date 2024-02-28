function getUserInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                nome: "João Silva",
                idade: 30,
                email: "joaosilva@example.com"
            });
        }, 2000); // Simula o tempo de espera de 2 segundos
    });
}
async function displayUserInfo() {
    try {
        const userInfo = await getUserInfo(); // Aguarda a resolução da Promise
        console.log("Informações do Usuário:");
        console.log(`Nome: ${userInfo.nome}`);
        console.log(`Idade: ${userInfo.idade}`);
        console.log(`Email: ${userInfo.email}`);
    } catch (error) {
        console.error("Erro ao obter informações do usuário:", error);
    }
}
displayUserInfo();
