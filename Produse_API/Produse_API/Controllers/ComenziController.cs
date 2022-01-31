#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Produse_API.Models;

namespace Produse_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComenziController : ControllerBase
    {
        private readonly ProduseDbContext _context;

        public ComenziController(ProduseDbContext context)
        {
            _context = context;
        }

        // GET: api/Comenzi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Comanda>>> GetComanda()
        {
            return await _context.Comanda.ToListAsync();
        }

        // GET: api/Comenzi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Comanda>> GetComanda(long id)
        {
            var comanda = await _context.Comanda.FindAsync(id);

            if (comanda == null)
            {
                return NotFound();
            }

            return comanda;
        }

        // PUT: api/Comenzi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComanda(long id, Comanda comanda)
        {
            if (id != comanda.Id)
            {
                return BadRequest();
            }

            _context.Entry(comanda).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComandaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Comenzi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Comanda>> PostComanda(Comanda comanda)
        {
            _context.Comanda.Add(comanda);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetComanda), new { id = comanda.Id }, comanda);
        }

        // DELETE: api/Comenzi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComanda(long id)
        {
            var comanda = await _context.Comanda.FindAsync(id);
            if (comanda == null)
            {
                return NotFound();
            }

            _context.Comanda.Remove(comanda);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComandaExists(long id)
        {
            return _context.Comanda.Any(e => e.Id == id);
        }
    }
}
