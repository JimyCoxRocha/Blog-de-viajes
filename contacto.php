<?php include_once "includes/templates/header.php";?>

<div class="contenedor">
    <main>
        <h1 class="centrar-txt">Contacto</h1>
        <div class="centrar-inline">
            <div class="card cd-contacto">
                <img src="img/persona1.jpeg" alt="Cox Rocha Jimy Andrés">
                <div>
                    <p>Jimy Andrés Cox Rocha</p>
                    <p><i class="fab fa-whatsapp color-wsp"></i> 0958657843</p>
                </div>
            </div>
        </div>
    </main>

    <section>
        <h2 class="centrar-txt">Formulario de Contacto</h2>
            <form action="" class="formulario">
                <label for="nombre">Nombre: </label> <input type="text" placeholder="Nombre" id="nombre"  pattern="[A-Za-z]{4,16}" onkeypress="return soloLetras(event)">
                <label for="correo">Correo: </label> <input type="email" placeholder="Correo electrónico" id="correo">
                <label for="telefono">Telefono: </label> <input type="tel" placeholder="Número de Whatsapp" id="telefono" pattern="[0-9]{10}" onkeypress="return soloNumeros(event)">
                
                <div class="centrar-inline">
                    <input type="submit" id="submit" class="boton">
                <div>
                
            </form>
    </section>
</div>

<?php include_once "includes/templates/footer.php";?>