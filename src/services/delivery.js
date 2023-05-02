export default function newDelivery(){
    return new Promise((resolve) => {
            resolve(
                {
                    Time: "30 Min",
                    Value: "13,75",
                    FullRoute: "8km",
                    Coleta: {
                        Distance: "2km",
                        Local: "Restaurante Recanto da Peixada"
                    },
                    Entrega: {
                        Distance: "6km",
                        Local: "Av: Cabo dos Soldados - Caranã"
                    }
                }
            )
    })
}