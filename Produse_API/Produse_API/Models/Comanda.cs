namespace Produse_API.Models
{
    public class Comanda
    {
        public long Id { get; set; }
        public double price { get; set; }
        public long user_id { get; set; }
        public IEnumerable<Produs> produse { get; set; }
    }
}
