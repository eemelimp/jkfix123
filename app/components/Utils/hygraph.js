import { GraphQLClient, gql } from "graphql-request";

async function connect() {
  const hygraphAvain = process.env.HYGRAPH_AVAIN;

  const graphcms = new GraphQLClient(
    `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clp41r2qe3y2401un0a1s5lee/master`
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

async function getHinnat() {
  const QUERY = gql`
    {
      hinnastot {
        nimi
        id
        sisalto
        hinta
      }
    }
  `;

  const graphcms = await connect();
  const hinnat = await graphcms.request(QUERY);
  return hinnat;
}

async function getUkkt() {
  const QUERY = gql`
    {
      ukkt {
        kysymys
        vastaus
        id
        avattu
      }
    }
  `;

  const graphcms = await connect();
  const ukkt = await graphcms.request(QUERY);
  return ukkt;
}

async function getData() {
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

      tiedot {
        puhelinnumero
        sahkopostiosoite
        suAukioloajat
        maPeAukioloajat
        laAukioloajat
        kontaktihenkilonNimi
        osoite
        paikkakunta
        postinumero
        yTunnus
      }

      hinnastot {
        nimi
        id
        sisalto
        hinta
      }

      ukkt {
        kysymys
        vastaus
        id
        avattu
      }
    }
  `;

  const graphcms = new GraphQLClient(
    `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clp41r2qe3y2401un0a1s5lee/master`
  );

  const data = await graphcms.request(QUERY);

  return data;
}

export { getPalvelut, getTiedot, getHinnat, getUkkt, getData };
