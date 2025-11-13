package com.crud_api.demo.repository;
import com.crud_api.demo.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface ProdutoRepository extends JpaRepository<Produto, Long> {

    List<Produto> findByNome(String nome);
}