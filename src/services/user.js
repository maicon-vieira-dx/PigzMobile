export default function userLogin(){
    return new Promise((resolve) => {
            resolve([
                {
                    Token: "jbkjb44jb2kçj2hbfihqjbb424hj6o",
                    Credencials: {
                        Email: "example@pigz.com.br",
                        Password: "pigzpigz",
                    },
                    Wallet: 150,
                    Deliveries: [
                        {
                            Name: 'Aceitas',
                            Value: 15
                        },
                        {
                            Name: 'Rejeitas',
                            Value: 5
                        },
                        {
                            Name: 'Total',
                            Value: 20
                        }
                    ]
                },
                {
                    Token: "jbkjb44jb2kçj2hbfihqjbb424hj6o",
                    Credencials: {
                        Email: "pigz@gmail.com",
                        Password: "pigz12345",
                    },
                    Wallet: 330,
                    Deliveries: [
                        {
                            Name: 'Aceitas',
                            Value: 22
                        },
                        {
                            Name: 'Rejeitas',
                            Value: 7
                        },
                        {
                            Name: 'Total',
                            Value: 19
                        }
                    ]
                    
                },
                {
                    Token: "jbkjb44jb2kçj2hbfihqjbb424hj6o",
                    Credencials: {
                        Email: "teste@gmail.com",
                        Password: "12345678",
                    },
                    Wallet: 50,
                    Deliveries: [
                        {
                            Name: 'Aceitas',
                            Value: 5
                        },
                        {
                            Name: 'Rejeitas',
                            Value: 12
                        },
                        {
                            Name: 'Total',
                            Value: 17
                        }
                    ]
                }
            ])
    })
}