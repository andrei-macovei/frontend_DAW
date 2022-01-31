using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;
using Produse_API.Models;

namespace Produse_API.Models
{
    public class ProduseDbContext : DbContext
    {
        public ProduseDbContext(DbContextOptions<ProduseDbContext> options)
            : base(options) { }

        public DbSet<Produs> Produse { get; set; } = null!;

        public DbSet<Produse_API.Models.User> User { get; set; }

        public DbSet<Produse_API.Models.Comanda> Comanda { get; set; }
    }
}
