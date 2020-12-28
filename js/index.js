var dados = [];

function DeletaRegistro(id) {
  let _confirm = confirm("Deseja realmente excluir esse registro ?");

  if (_confirm) {
    for (let i = 0; i < dados.length; i++) {
      if (dados[i].id == id) {
        dados.splice(i, 1);
      }
    }
    PopulaTabela();
  }
}

function EditarRegistro(id) {
  $("#modalRegistro").modal("show");

  dados.forEach(function (item) {
    if (item.id == id) {
      $("#hdId").val(item.id);
      $("#txtNome").val(item.Nome);
      $("#txtEmail").val(item.Email);
      $("#txtDoc").val(item.Doc);
      $("#txtTel").val(item.Tel);
      $("#txtCep").val(item.Cep);
      $("#txtLogra").val(item.Logra);
      $("#txtNum").val(item.Num);
      $("#txtBairro").val(item.Bairro);
      $("#txtCidade").val(item.Cidade);
      $("#txtEst").val(item.Est);
    }
  });
}

function PopulaTabela() {
  if (Array.isArray(dados)) {
    localStorage.setItem("__dados__", JSON.stringify(dados));

    $("#tblDados tbody").html("");

    dados.forEach(function (item) {
      $("#tblDados tbody").append(`<tr>
          <td>${item.id}</td>
          <td>${item.Nome}</td>
          <td>${item.Email}</td>
          <td>${item.Doc}</td>
          <td>${item.Cep}</td>
          <td>${item.Logra}</td>
          <td>${item.Num}</td>
          <td>${item.Bairro}</td>
          <td>${item.Cidade}</td>
          <td>${item.Est}</td>
          <td><button type="button" class="btn btn-primary" onclick="javascript:EditarRegistro(${item.id});"><i class="far fa-edit"></i></button></td>
          <td><button type="button" class="btn btn-danger" onclick="javascript:DeletaRegistro(${item.id});"><i class="far fa-trash-alt"></i></button></td>

         </tr>`);
    });
  }
}
$(function () {
  dados = JSON.parse(localStorage.getItem("__dados__"));

  if (dados) {
    PopulaTabela();
  }
  $("#btnSalvar").click(function () {
    let _id = $("#hdId").val();
    let Nome = $("#txtNome").val();
    let Email = $("#txtEmail").val();
    let Doc = $("#txtDoc").val();
    let Tel = $("#txtTel").val();
    let Cep = $("#txtCep").val();
    let Logra = $("#txtLogra").val();
    let Num = $("#txtNum").val();
    let Bairro = $("#txtBairro").val();
    let Cidade = $("#txtCidade").val();
    let Est = $("#txtEst").val();

    if (!_id || _id == "0") {
      let registro = {};

      registro.Nome = Nome;
      registro.Email = Email;
      registro.Doc = Doc;
      registro.Tel = Tel;
      registro.Cep = Cep;
      registro.Logra = Logra;
      registro.Num = Num;
      registro.Bairro = Bairro;
      registro.Cidade = Cidade;
      registro.Est = Est;

      registro.id = dados.length + 1;
      dados.push(registro);
    } else {
      dados.forEach(function (item) {
        if (item.id == _id) {
          item.Nome = Nome;
          item.Email = Email;
          item.Doc = Doc;
          item.Tel = Tel;
          item.Cep = Cep;
          item.Logra = Logra;
          item.Num = Num;
          item.Bairro = Bairro;
          item.Cidade = Cidade;
          item.Est = Est;
        }
      });
    }
    alert("Cadastro feito com Sucesso");
    $("#modalRegistro").modal("hide");

    $("#hdId").val("0");
    $("#txtNome").val("");
    $("#txtEmail").val("");
    $("#txtDoc").val("");
    $("#txtTel").val("");
    $("#txtCep").val("");
    $("#txtLogra").val("");
    $("#txtNum").val("");
    $("#txtBairro").val("");
    $("#txtCidade").val("");
    $("#txtEst").val("");

    PopulaTabela();
  });
});
