import { GraphQLClient, gql } from "graphql-request";

async function connect() {
  const hygraphAvain = process.env.HYGRAPH_AVAIN;

  const graphcms = new GraphQLClient(
    `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/${hygraphAvain}/master`
  );

  return graphcms;
}
async function getPalvelut() {
  const QUERY = gql`
    {
      palvelut {
        altTag
        id
        palvelunKuvaus
        palvelunNimi
        palvelunKuva {
          url
        }
      }
    }
  `;

  const graphcms = await connect();
  const palvelut = await graphcms.request(QUERY);
  return palvelut;
}

async function getTiedot() {
  const QUERY = gql`
    {
      tiedot {
        puhelinnumero
        sahkopostiosoite
        suAukioloajat
        maPeAukioloajat
        laAukioloajat
        kontaktihenkilonNimi
        osoite
      }
    }
  `;

  const graphcms = await connect();
  const tiedot = await graphcms.request(QUERY);
  return tiedot;
}

export { getPalvelut, getTiedot };
