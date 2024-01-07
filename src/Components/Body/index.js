import styles from "./Body.module.css"
import image1 from "./imagens/body-2.webp"
import image2 from "./imagens/body-3.jpg"

function Corpo() {
    return(
        <section className={styles.corpo}>
            <h2>Celebrando 30 Anos de Amor pelos 
                Pets: Pet-Pet 
                Agradece a Você!
            </h2>
            <img src={image1} alt="imagem cachorro"/>
            <p>Caros Amigos Pet-Lovers,</p>
            <p>Hoje é um dia especial para nós da Pet-Pet, 
                pois celebramos três décadas de amor, comprometimento e 
                alegrias compartilhadas com vocês, nossos clientes queridos. 
                Há 30 anos, começamos nossa jornada com a missão de cuidar 
                dos seus animais de estimação como se fossem os nossos próprios, 
                e é com imensa gratidão que olhamos para trás e refletimos sobre 
                todos esses anos de parceria.
            </p>
            <p>
                A Pet-Pet nasceu do amor pelos animais, e ao longo dos anos, 
                construímos laços inquebráveis com cada um de vocês. Desde os 
                primeiros filhotes que conhecemos até os amigos mais velhinhos que 
                envelheceram junto conosco, cada experiência compartilhada foi única 
                e significativa. Seja em consultas veterinárias, banhos relaxantes, 
                ou na busca pelo brinquedo perfeito, estamos aqui para fazer parte da 
                jornada dos seus pets.
            </p>
            <p>
                Nosso compromisso sempre foi proporcionar serviços de alta qualidade, 
                combinados com um atendimento caloroso e personalizado. É com alegria e 
                satisfação que continuamos aprimorando nossos serviços para atender às 
                necessidades em constante evolução dos seus queridos companheiros peludos.

                Agradecemos a cada um de vocês por confiar em nós ao longo desses anos. 
                Suas histórias, alegrias e desafios compartilhados fizeram de cada dia uma
                celebração da incrível relação que temos com os animais. Esperamos ansiosos
                pelos próximos anos de parceria e prometemos continuar oferecendo o melhor 
                para os seus pets, porque a felicidade deles é a nossa maior recompensa.
            </p>
            <p>
                Neste trigésimo aniversário, celebramos não apenas o passado, mas também o futuro 
                cheio de novas aventuras e momentos especiais ao lado dos seus amados animais de 
                estimação. Obrigado por fazerem parte da história da Pet-Pet. Que venham mais 
                30 anos de amor, carinho e dedicação aos nossos fiéis amigos de quatro patas!

                
            </p>
            <img src={image2} alt="Outra imagem de cão" title="Com gratidão,
                Equipe Pet-Pet"/>
            <p>
                <strong>Com gratidão,
                Equipe Pet-Pet</strong>
            </p>

        </section>
    );
}

export default Corpo;
