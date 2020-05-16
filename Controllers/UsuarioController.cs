﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoCoreAngular.Models;

namespace ProjetoCoreAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        // GET: api/Usuario
        [HttpGet]
        public IEnumerable<Usuario> Get()
        {
            List<Usuario> oUsuario = new List<Usuario>()
            {
                new Usuario(){Id = 1, Nome = "Leonardo Almeida", Email = "teste1@teste.com"},
                new Usuario(){Id = 2, Nome = "Livia Almeida", Email = "teste2@teste.com"},
                new Usuario(){Id = 3, Nome = "Almir Almeida", Email = "teste3@teste.com"}
            };
            return oUsuario;
        }

        // GET: api/Usuario/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Usuario
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Usuario/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
