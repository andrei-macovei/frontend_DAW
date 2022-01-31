namespace Produse_API.Models
{
    public class Produs
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public double price { get; set; }
        public string? category { get; set; }
    }
}