import { allHomes } from "@/app/allHomes";

export default function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const { id } = req.query; 

    if (id) {
      const home = allHomes.find((home: any) => home.slug === id);

      if (home) {
        res.status(200).json(home); 
      } else {
        res.status(404).json({ message: 'Imóvel não encontrado' }); 
      }
    } else {
      res.status(400).json({ message: 'ID do imóvel não fornecido' }); 
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' }); 
  }
}
